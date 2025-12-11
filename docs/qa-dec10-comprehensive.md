# Student Q&A - December 10, 2025

**Your questions answered!** This document contains answers to questions submitted through the Google Form plus issues discussed in class.

> **Pro tip:** Ask Claude Code to read this file when you're stuck. It can help you find answers and walk you through solutions.

---

## Before You Start - Get the Latest Updates!

Many issues have been fixed in recent commits. **Run this command first:**

```bash
cd ~/GitHub/mindvalley-ai-mastery-students && git pull
```

This gives you:
- Fixed Echo Processor (Dec 10 version - all bugs resolved)
- Updated KB Manager / Stacks with store deletion
- Fixed workflow configurations
- This Q&A document!

---

## Quick Navigation

| Issue | Status | Jump to Section |
|-------|--------|-----------------|
| Echo workflow incomplete (3 nodes) | FIXED | [Echo Issues](#echo-workflow-issues) |
| Echo fails at "Create Files for Email" | FIXED | [Echo Issues](#echo-workflow-issues) |
| KB Manager / Stacks missing | FIXED | [Stacks Issues](#stacks--kb-manager-issues) |
| Stacks "Failed to fetch" error | FIXED | [Stacks Issues](#stacks--kb-manager-issues) |
| W2 Approval Handler won't import | IN PROGRESS | [W2 Issues](#w2-approval-handler-issues) |
| Gemini Corpora 404 errors | ANSWERED | [Gemini Issues](#gemini--knowledge-base-issues) |
| Windows git-bash PATH error | ANSWERED | [Setup Issues](#setup--installation-issues) |
| OpenRouter costs too high | ANSWERED | [Cost Questions](#cost-questions) |
| Gmail OAuth setup | ANSWERED | [Credential Setup](#credential-setup) |

---

## Echo Workflow Issues

### "Echo Processor only has 3 nodes"

**Status:** FIXED

**What happened:** The Dec 5 export was incomplete.

**Solution:**
```
Ask Claude Code:
"Please pull the latest updates from the student repo and help me
re-import the Echo workflows. I need the Dec 10 versions."
```

After pulling, you should have:
- `echo-processor-v2-2025-12-10.json` (~97KB, 40 nodes)
- `echo-trigger-v2-2025-12-10.json`

The old incomplete versions have been removed.

---

### "Echo runs but I get empty XML / 'No XML generated'"

**Status:** FIXED (Dec 10)

**What happened:** API key authentication wasn't passing through all nodes correctly.

**Solution:**
```
Ask Claude Code:
"I ran git pull. Now help me delete my old Echo workflows from N8N
and re-import the Dec 10 versions fresh. Then help me configure the
credentials (Anthropic/OpenRouter API and Gmail)."
```

**Important:** You need to configure your API credential in the "Configuration" node inside Echo Processor.

---

### "Echo fails at 'Create Files for Email' node"

**Status:** FIXED (Dec 10)

**What happened:** The node couldn't handle certain input formats (the "Unknown" name bug).

**Solution:** This is fixed in the Dec 10 version. Run `git pull` and re-import.

---

### "I never received the Echo email"

**Checklist:**
1. Check spam/junk folder (common!)
2. Wait the full 10 minutes
3. Verify you entered the correct email in the form
4. Check N8N Executions tab - did it complete successfully?

```
Ask Claude Code:
"Help me check if my Echo workflow executed successfully.
Show me how to view the Executions tab in N8N and interpret
any errors I see."
```

---

## Stacks / KB Manager Issues

### "The Stacks folder doesn't exist in my repo"

**Status:** FIXED (Dec 8)

**Solution:**
```bash
cd ~/GitHub/mindvalley-ai-mastery-students
git pull
ls tools/kb-manager/
```

You should see: `index.html`, `proxy.js`, `README.md`, and a `docs/` folder.

---

### "Stacks shows 'Failed to fetch' error"

**Status:** Multiple causes - try these in order:

**1. Check your webhook URL:**
```
Ask Claude Code:
"Help me verify my N8N webhook URL is correct in The Stacks settings.
Show me where to find my webhook base URL in N8N."
```

**2. Check your API key:**
Make sure your Gemini API key is valid. Test it:
```
Ask Claude Code:
"Help me test if my Gemini API key is working by making a simple
API call to verify it."
```

**3. Use Direct API Mode (workaround):**
If webhooks aren't working, Claude Code can upload files directly:
```
Ask Claude Code:
"The Stacks UI isn't working for me. Can you help me upload my
knowledge base documents directly to Gemini File Search using
the API instead?"
```

---

### "Stacks loads but won't create a store"

**Check these:**
1. Is your Gemini API key entered correctly? (no extra spaces)
2. Is your N8N webhook URL correct?
3. Are your N8N Gemini workflows active?

```
Ask Claude Code:
"Help me troubleshoot why I can't create a store in The Stacks.
Check my API key format, webhook URL, and verify the N8N
workflows are active."
```

---

### "I uploaded via terminal/Python - do I need to use Stacks?"

**No!** If your documents are already in Gemini, you're good. Stacks is just a UI - the backend is the same.

```
Ask Claude Code:
"Can you verify my documents are in my Gemini File Search store?
List what's currently uploaded."
```

---

## W2 Approval Handler Issues

### "W2 won't import - 'Could not find property option'"

**Status:** IN PROGRESS - Tyler is working on a fix

**What's happening:** The workflow has some node configurations that N8N can't parse on import.

**For now:**
1. Skip W2 setup and continue with other homework
2. Focus on getting Echo and KB working
3. Check back for updates - a fix is coming

```
Ask Claude Code:
"Please check if there's a new version of the W2 Approval Handler
workflow in the repo. Run git pull first."
```

---

## Gemini / Knowledge Base Issues

### "Google AI Studio doesn't show Corpora anymore"

**This is expected!** Google changed the UI.

**Solution:** Use N8N workflows instead of the Google UI:
- `gemini-create-store-v1` - Create new stores
- `gemini-upload-document-v1` - Upload documents
- `gemini-list-documents-v2` - See what's uploaded

Or use The Stacks UI - it handles everything for you.

```
Ask Claude Code:
"Help me create a Gemini File Search store using the N8N workflow
instead of the Google AI Studio UI."
```

---

### "Getting 404 errors when uploading documents"

**What changed:** Google deprecated the old `corpora/` endpoint.

**New format:** Store IDs are now `fileSearchStores/xxx` not `corpora/xxx`

**Solution:** The updated N8N workflows handle this automatically. Run `git pull` and use the latest versions.

---

## Setup / Installation Issues

### Windows: "Claude Code requires git-bash" error

**Solution:**

1. Set the environment variable:
   - Press `Windows + S`, search "environment variables"
   - Click "Edit the system environment variables"
   - Click "Environment Variables"
   - Under "User variables", click "New"
   - Name: `CLAUDE_CODE_GIT_BASH_PATH`
   - Value: `C:\Program Files\Git\bin\bash.exe`
   - Click OK three times

2. **Restart VS Code completely** (not just reload)

3. If still failing, reinstall Git:
   - Download from https://git-scm.com/download/win
   - During install, CHECK: "Git from command line and 3rd-party software"
   - Restart your computer

---

### Mac: Homebrew ARM architecture error

**The error:** `xcrun: error: unable to load libxcrun (incompatible architecture)`

**Solution:**
```bash
# Remove wrong tools
sudo rm -rf /Library/Developer/CommandLineTools

# Reinstall correct version
xcode-select --install

# Verify (should show "arm64")
uname -m
```

---

### "I can't find where to enter my API key in Claude Code"

**Claude Code doesn't use a separate API key!**

It authenticates through your Claude Pro subscription ($20/month) via OAuth:
1. Make sure you're logged into claude.ai in your browser
2. Open VS Code
3. Open Claude Code extension
4. It authenticates via browser popup - no API key to paste

**Note:** OpenRouter API keys go in N8N, not Claude Code.

---

## Credential Setup

### Gmail OAuth2 Setup in N8N

**Step by step:**

1. In N8N, click on a Gmail node
2. Click "Create New Credential"
3. Select "Gmail OAuth2 API"
4. Click "Sign in with Google"
5. Select your Gmail account
6. Click "Allow"
7. Done! The credential is now saved.

```
Ask Claude Code:
"Walk me through setting up Gmail OAuth2 credentials in N8N
step by step. I need this for the Echo workflow email sending."
```

---

### Google Sheets OAuth2 Setup

Same process as Gmail:
1. Click on a Google Sheets node
2. Create New Credential
3. Sign in with Google
4. Allow permissions

---

### OpenRouter Setup in N8N

1. Go to openrouter.ai
2. Click "Keys" in the menu
3. Click "Create Key"
4. Name it (e.g., "MindValley Course")
5. Copy the key immediately (you can't see it again!)
6. In N8N, when adding OpenRouter credential, paste this key

```
Ask Claude Code:
"Help me set up OpenRouter as my LLM provider in the N8N workflows.
I have my API key ready."
```

---

## Cost Questions

### "I spent $10 in one hour on OpenRouter!"

**What happened:** Running Echo Processor multiple times while debugging burns through credits fast. Each run makes 14+ LLM calls.

**Expected costs:**
- Echo run (working correctly): ~$0.50-1.00
- Email processing (Sugar): ~$0.01-0.05 per email
- Debugging/testing: Higher (temporary)

**How to control costs:**

1. **Set a spending limit:**
   - Go to openrouter.ai > Settings > Limits
   - Set a daily limit (e.g., $5/day)

2. **Use cheaper models for testing:**
   - Haiku is ~10x cheaper than Sonnet
   - Flash is even cheaper

3. **Don't run workflows repeatedly while debugging:**
   - Check node configurations first
   - Use the N8N Executions tab to see where things fail
   - Fix the issue BEFORE running again

```
Ask Claude Code:
"Help me switch my Echo workflow to use Haiku instead of Sonnet
for testing purposes to save on API costs."
```

---

### "What are the ongoing costs to run this system?"

**Monthly fixed costs:**
- Claude Pro: $20
- N8N Cloud: $20
- Total: $40/month

**Variable API costs (OpenRouter):**
- Light use (occasional emails): $5-10/month
- Active use (daily emails): $20-50/month
- The debugging/learning phase costs more (temporary)

---

## Understanding the System

### "Where does the agent's brain/prompt live?"

The agent instructions (called "system prompt" or "system message") are inside each agent node in N8N:

1. Open the workflow in N8N
2. Click on an agent node (e.g., Sugar, Hatch, Cinnamon)
3. Look for "System Message" field
4. That's the agent's instructions

The knowledge base (RAG) adds context but the system prompt defines the agent's behavior.

---

### "Why do we need multiple agents?"

Each agent has a specialized role:
- **Cinnamon:** Sentiment analysis (reads the room)
- **Hatch:** Expert with knowledge base access
- **Sugar:** Writes the response in your voice
- **Bishop:** Quality assurance
- **Holler:** Sends to Slack for your approval

This division of labor produces better results than one overloaded agent.

---

### "Why human-in-the-loop? Why not fully automated?"

Trust is earned, not assumed. The system:
1. Drafts a response (agents do this)
2. Sends to Slack for your review (Holler does this)
3. You approve, edit, or reject
4. Only then does it send to the customer

As you build confidence in the system, you can increase automation. But start with human oversight.

---

## Homework Clarification

### "What exactly should I have done for Homework Part 2?"

**Checklist:**

- [ ] Run `git pull` to get latest updates
- [ ] Set up KB Manager / Stacks
- [ ] Create a Gemini File Search store
- [ ] Upload Hattie B's demo documents (5 files in `demo/hattieb/knowledge-base/`)
- [ ] Create your megadoc (collection of your writing samples)
- [ ] Import and configure Echo workflows
- [ ] Run Echo to generate your brand voice XML
- [ ] Upload brand voice analysis to your knowledge base

```
Ask Claude Code:
"Check my progress on Homework Part 2. What have I completed
and what do I still need to do? Please verify against the
homework requirements."
```

---

### "Where is the Homework Part 2 document?"

It's at: `docs/homework-part2-quick-guide.md`

If you don't see it, run `git pull`.

---

## Getting Help

### "How do I use this Q&A effectively?"

```
Ask Claude Code:
"I'm stuck on [describe your issue]. Can you check the Q&A
documents in the docs/ folder and see if there's an answer
for my problem?"
```

### "My issue isn't covered here"

1. Submit via the Google Form (Tyler & Sara review these)
2. Bring it to Friday office hours
3. Check back - this document gets updated

---

## Coming Soon (Still Being Fixed)

These items are being worked on:

1. **W2 Approval Handler** - Import error fix in progress
2. **Additional troubleshooting guides** - More detailed walkthroughs

Check back or run `git pull` for updates!

---

*Last updated: December 10, 2025*
*Questions? Submit via the Google Form or bring to office hours.*
