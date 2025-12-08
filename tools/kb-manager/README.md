# 📚 The Stacks

Your visual Knowledge Base Manager for Gemini File Search.

Stop wrestling with APIs. The Stacks gives you a clean interface to upload documents, organize them, and feed them into your AI agents.

## Quick Start

1. **Get your API key** from [aistudio.google.com](https://aistudio.google.com)
2. **Get your N8N webhook base URL** (e.g., `https://your-workspace.n8n.cloud/webhook`)
3. **Launch the app:**
   ```bash
   npx serve .
   ```

4. **Open** http://localhost:3000, go to **Settings**, paste your **Gemini API key** and **N8N webhook base URL**, then click **Save**.

That's it! You're ready to upload documents (all calls proxy through N8N to avoid CORS).

## Alternative: Python

If you don't have Node.js:

```bash
python -m http.server 3000
```

Then open http://localhost:3000

## Features

- **Upload files** - Drag-and-drop or click to browse (PDF, DOCX, TXT, MD, HTML)
- **View documents** - See everything in your knowledge base at a glance
- **Delete documents** - Remove files with confirmation
- **Multiple stores** - Create and switch between knowledge bases
- **Activity log** - Track all operations

## How It Works

The Stacks now calls **N8N webhooks**, which in turn call the Gemini File Search API. This removes browser CORS issues and keeps keys server-side.

```
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│   The Stacks    │────▶│   N8N Webhooks      │────▶│  Gemini File    │
│   (this UI)     │     │ (/kb-*)             │     │  Search API     │
└─────────────────┘     └─────────────────────┘     └─────────────────┘
```

## Troubleshooting

**"npx: command not found"**
- Install Node.js from [nodejs.org](https://nodejs.org)

**"Port 3000 already in use"**
- Try: `npx serve . -l 3001`
- Then open http://localhost:3001

**"Invalid API Key"**
- Make sure you copied the entire key (no extra spaces)
- Get a fresh key from [aistudio.google.com](https://aistudio.google.com)

**"N8N webhook not configured"**
- Go to Settings and add your webhook base URL (ending with `/webhook`)
- Ensure the workflows in `assets/n8n-workflows/` are imported and active in N8N

**Files not appearing after upload**
- Wait 2-3 seconds for Gemini to process
- Click the refresh button (🔄)
- Check the activity log for errors

## Full Documentation

- **Student Guide:** [curriculum/session-3/kb-manager-guide.md](../../curriculum/session-3/kb-manager-guide.md)
- **Week 3 Materials:** [curriculum/week-3-knowledge-base/](../../curriculum/week-3-knowledge-base/)

---

*Part of MindValley AI Mastery · Built by AI Build Lab*
