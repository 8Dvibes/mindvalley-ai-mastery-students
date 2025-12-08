# The Stacks UI: Knowledge Base Manager

The Stacks UI is your control panel for managing knowledge bases in Gemini File Search. This guide walks you through every feature.

## What is The Stacks UI?

The Stacks UI is a web interface that:
- Creates and manages Gemini File Search knowledge bases
- Uploads your documents (PDFs, Word docs, text files, markdown)
- Shows you what's stored and verifies content
- Integrates with N8N workflows for automation (optional)
- Runs locally in your browser with no server required

Think of it as a filing cabinet for your knowledge base. You drag files in, The Stacks organizes them, and your agents can search through them instantly.

---

## Getting Started: Launch The Stacks UI

### Step 1: Open Terminal

```bash
# Navigate to the kb-manager folder
cd tools/kb-manager

# Start the local server
npx serve .
```

You'll see output like:
```
   ┌─────────────────────────────────────────────────────┐
   │   Accepting connections at http://localhost:3000    │
   └─────────────────────────────────────────────────────┘
```

### Step 2: Open Your Browser

Go to: `http://localhost:3000`

You should see The Stacks UI homepage.

### Step 3: Go to Settings (First Thing!)

Before doing anything else, click **Settings** in the top navigation.

This is where you connect The Stacks to your Google account.

---

## Settings Page: Connect Your API

### Getting Your Gemini API Key

1. Go to https://aistudio.google.com
2. Click **Get API Key** in the left sidebar
3. Click **Create API Key in new project**
4. Google will generate a key that looks like: `AIza...` (long string)
5. **Copy the entire key** (the whole thing, including the beginning)

### Entering Your API Key in The Stacks

1. Back in The Stacks UI, click **Settings**
2. Find the **Gemini API Key** field
3. Paste your key
4. Click **Save Settings**

You should see: "Settings saved successfully"

If you see "Invalid API key", double-check:
- You copied the entire key (not just part of it)
- No extra spaces or quotes
- The key is from aistudio.google.com (not from Cloud Console)

### Optional: N8N Webhook URL

If you have an N8N workflow that auto-uploads documents:
- Get the webhook URL from your N8N workflow
- Paste it in The Stacks **N8N Webhook URL** field
- Save Settings

You don't need this for Session 1. Skip it for now.

### Settings Persistence

Your settings are saved in your browser's **localStorage**. This means:
- Settings stay saved even if you close The Stacks
- Settings are specific to this browser (different browser = need to re-enter)
- Clearing browser data will erase your settings (save your API key somewhere safe!)

---

## Core Features: Step-by-Step

### Feature 1: Create a Store

A "Store" is a knowledge base in Google Cloud. You can have multiple stores for different purposes.

#### How to Create a Store

1. Click **Create New Store**
2. Enter a name: `my-business-kb` (alphanumeric, hyphens okay, no spaces)
3. Click **Create**

The Stacks will:
- Connect to Google Cloud using your API key
- Create a new Gemini File Search store
- Show the store ID (save this if you need it later)
- Take you to the Upload page automatically

**Tip**: Use descriptive names like `hattie-bs-menu`, `customer-policies`, `faq-2024`.

### Feature 2: Upload Documents

Now your store exists. Time to upload your business information.

#### What File Types Can You Upload?

- **PDF** - Best for forms, menus, official documents
- **DOCX** - Word documents (Google converts to text)
- **TXT** - Plain text files
- **MD** - Markdown files (treated as text)

#### File Size Limits

- Maximum 10MB per file
- Gemini File Search handles larger documents fine, but each file can't exceed 10MB

#### How to Upload Files

**Option A: Drag and Drop**
1. Go to The Stacks Upload page
2. Drag your files into the upload area
3. The Stacks shows each file uploading
4. Wait for the progress bar to complete

**Option B: Click to Browse**
1. Click the **Choose Files** button
2. Select files from your computer
3. Click **Open** to start upload

#### What Happens During Upload

1. You choose files
2. The Stacks shows a progress bar for each file
3. Files are sent to Google Cloud
4. Google auto-indexes them (creates searchable index)
5. You see "Upload complete"

**Indexing takes 1-2 minutes.** Don't close The Stacks or your browser until all files show complete.

### Feature 3: View Your Documents

Once files upload, you can see what's in your store.

#### How to View Documents

1. Click **Documents** in the navigation
2. You'll see a list of all files with:
   - Filename
   - File size (in KB or MB)
   - Upload date and time
   - Status (should say "Ready")

#### Preview a Document

1. Click on a filename
2. The Stacks shows a preview of the content
3. Verify the file uploaded correctly

**Tip**: Always preview at least one file to make sure The Stacks indexed it correctly.

### Feature 4: Delete Documents

If you upload the wrong file or need to remove something, delete it.

#### How to Delete

1. Go to **Documents**
2. Find the file you want to delete
3. Click **Delete** next to the filename
4. Confirm deletion

**Warning**: Deletion is permanent. Google removes it from their servers immediately.

### Feature 5: Activity Log

The Activity Log shows everything The Stacks has done. Helpful for debugging.

#### How to View Activity Log

1. Click **Activity Log** in the navigation
2. You'll see a list of all operations with timestamps:
   - "Store created: my-kb-store"
   - "Document uploaded: menu.pdf"
   - "Document deleted: old-hours.txt"

---

## Common Issues and Solutions

### "Invalid API Key" Error

**Problem**: The Stacks says your API key is invalid.

**Solution**:
1. Check you're using a Gemini API key (from aistudio.google.com)
2. Not a Cloud Console key
3. Copy the entire key with no extra spaces
4. Re-paste into Settings and Save

### Upload Fails Midway

**Problem**: Upload starts but stops or shows an error.

**Solution**:
1. Check your internet connection
2. Make sure file is under 10MB
3. Try a different file format (TXT instead of PDF)
4. Refresh the page and try again
5. Check Activity Log for error details

### Files Not Showing After Upload

**Problem**: You uploaded files but they don't appear in Documents list.

**Solution**:
1. Indexing takes 1-2 minutes. Wait and refresh.
2. Make sure you're looking at the right Store
3. Check Activity Log to confirm upload succeeded
4. Try uploading a small TXT file to test

### Settings Not Saving

**Problem**: You enter your API key, click Save, but it disappears when you refresh.

**Solution**:
1. Check if localStorage is blocked in your browser settings
2. Try a different browser (Chrome vs. Safari)
3. Check browser privacy settings
4. In Chrome: Settings → Privacy → Allow all cookies

### Can't Access Localhost:3000

**Problem**: Your browser can't reach `http://localhost:3000`.

**Solution**:
1. Is the terminal running? (should show "Accepting connections")
2. Try `http://127.0.0.1:3000` instead
3. If terminal shows an error, try: `npm install -g serve` then `serve .` again
4. Check if another program is using port 3000

---

## Verification Checklist

After uploading your first documents:

- [ ] Settings saved with valid API key
- [ ] Created at least one Store
- [ ] Uploaded at least one document
- [ ] Document shows in Documents list
- [ ] Clicked Preview and saw your content
- [ ] Activity Log shows all operations

If all checkboxes pass, your knowledge base is set up and ready for agents to search.

---

## What Comes Next

1. Your agents will use this knowledge base to answer customer questions
2. In Session 1 Lab, you'll upload your business documents
3. In Sessions 2-4, you'll see how agents query this information
4. You can update documents anytime by uploading new versions

---

## Quick Reference

### Commands

```bash
# Start The Stacks UI
cd tools/kb-manager
npx serve .

# Stop The Stacks UI
# Press Ctrl+C in the terminal
```

### API Key Location

- Get Gemini API Key: https://aistudio.google.com (click "Get API Key")
- Paste in The Stacks: Settings page, "Gemini API Key" field

### File Limits

- Max file size: 10MB
- Supported formats: PDF, DOCX, TXT, MD
