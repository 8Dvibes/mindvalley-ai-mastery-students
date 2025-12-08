#!/usr/bin/env node
/**
 * Quick CORS Proxy for Gemini File Search API
 * Run with: node proxy.js
 * Then use http://localhost:3001 as your "N8N Webhook Base URL"
 */

const http = require('http');
const https = require('https');

const PORT = 3001;
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta';
const GEMINI_UPLOAD_BASE = 'https://generativelanguage.googleapis.com/upload/v1beta';

// Helper to convert corpora/* to fileSearchStores/*
function toFileSearchStore(storeId) {
  if (!storeId) return storeId;
  return storeId.replace('corpora/', 'fileSearchStores/');
}

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

function proxyRequest(url, options) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, data: { raw: data } }); }
      });
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function handleRequest(req, res) {
  cors(res);

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const body = await parseBody(req);
  const { apiKey, storeId, displayName, documentId, fileName, mimeType, content } = body;

  let result;
  const path = req.url;

  try {
    // Route based on path
    if (path === '/kb-list-stores') {
      result = await proxyRequest(`${GEMINI_BASE}/fileSearchStores?key=${apiKey}`, { method: 'GET' });
      if (result.status === 200) {
        // Map fileSearchStores to corpora format for backwards compatibility with UI
        const stores = (result.data.fileSearchStores || []).map(s => ({
          ...s,
          name: s.name.replace('fileSearchStores/', 'corpora/')
        }));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'SUCCESS', corpora: stores }));
      } else {
        res.writeHead(result.status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ERROR', error: result.data.error?.message || 'API error' }));
      }
    }

    else if (path === '/kb-create-store') {
      result = await proxyRequest(`${GEMINI_BASE}/fileSearchStores?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName })
      });
      if (result.status === 200) {
        // Map response to corpora format for backwards compatibility
        const store = { ...result.data, name: result.data.name?.replace('fileSearchStores/', 'corpora/') };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'SUCCESS', store }));
      } else {
        res.writeHead(result.status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ERROR', error: result.data.error?.message }));
      }
    }

    else if (path === '/kb-list-documents') {
      const fssStoreId = toFileSearchStore(storeId);
      result = await proxyRequest(`${GEMINI_BASE}/${fssStoreId}/documents?key=${apiKey}`, { method: 'GET' });
      res.writeHead(result.status === 200 ? 200 : result.status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result.status === 200 ? { status: 'SUCCESS', documents: result.data.documents || [] } : { status: 'ERROR', error: result.data.error?.message }));
    }

    else if (path === '/kb-delete-document') {
      const fssDocId = toFileSearchStore(documentId);
      result = await proxyRequest(`${GEMINI_BASE}/${fssDocId}?key=${apiKey}`, { method: 'DELETE' });
      res.writeHead(result.status === 200 ? 200 : result.status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: result.status === 200 ? 'SUCCESS' : 'ERROR', error: result.data.error?.message }));
    }

    else if (path === '/kb-upload') {
      // Resumable upload - Step 1: Start upload
      // Extract just the store ID (without prefix) and use the new uploadToFileSearchStore endpoint
      const storeIdOnly = storeId.replace('corpora/', '').replace('fileSearchStores/', '');
      const startUrl = `${GEMINI_UPLOAD_BASE}/fileSearchStores/${storeIdOnly}:uploadToFileSearchStore?key=${apiKey}`;
      const fileBuffer = Buffer.from(content, 'base64');

      const startReq = https.request(startUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Upload-Protocol': 'resumable',
          'X-Goog-Upload-Command': 'start',
          'X-Goog-Upload-Header-Content-Length': fileBuffer.length.toString(),
          'X-Goog-Upload-Header-Content-Type': mimeType || 'application/octet-stream'
        }
      });

      const startPromise = new Promise((resolve, reject) => {
        startReq.on('response', (startRes) => {
          const uploadUrl = startRes.headers['x-goog-upload-url'];
          let startData = '';
          startRes.on('data', c => startData += c);
          startRes.on('end', () => resolve({ uploadUrl, status: startRes.statusCode, data: startData }));
        });
        startReq.on('error', reject);
      });

      startReq.write(JSON.stringify({ displayName: fileName }));
      startReq.end();

      const startResult = await startPromise;

      if (!startResult.uploadUrl) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ERROR', error: 'No upload URL returned' }));
        return;
      }

      // Step 2: Upload content
      const uploadUrl = new URL(startResult.uploadUrl);

      const uploadReq = https.request({
        hostname: uploadUrl.hostname,
        path: uploadUrl.pathname + uploadUrl.search,
        method: 'POST',
        headers: {
          'Content-Type': mimeType,
          'Content-Length': fileBuffer.length,
          'X-Goog-Upload-Command': 'upload, finalize',
          'X-Goog-Upload-Offset': '0'
        }
      });

      const uploadPromise = new Promise((resolve, reject) => {
        uploadReq.on('response', (uploadRes) => {
          let uploadData = '';
          uploadRes.on('data', c => uploadData += c);
          uploadRes.on('end', () => {
            try { resolve({ status: uploadRes.statusCode, data: JSON.parse(uploadData) }); }
            catch { resolve({ status: uploadRes.statusCode, data: { raw: uploadData } }); }
          });
        });
        uploadReq.on('error', reject);
      });

      uploadReq.write(fileBuffer);
      uploadReq.end();

      const uploadResult = await uploadPromise;

      res.writeHead(uploadResult.status === 200 ? 200 : uploadResult.status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(uploadResult.status === 200 ? { status: 'SUCCESS', document: uploadResult.data } : { status: 'ERROR', error: uploadResult.data.error?.message || 'Upload failed' }));
    }

    else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unknown endpoint' }));
    }

  } catch (err) {
    console.error('Proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ERROR', error: err.message }));
  }
}

const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log(`\n🚀 Gemini Proxy running at http://localhost:${PORT}`);
  console.log(`\n📋 In The Stacks, set N8N Webhook Base URL to:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`\n⚠️  Make sure to UNCHECK "Direct API Mode"\n`);
});
