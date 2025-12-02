# Quick Start

Get up and running fast. For detailed setup, see [ONBOARDING.md](../ONBOARDING.md).

---

## Step 1: Get the Repository

**Option A: ZIP Download (Easiest)**
1. Go to https://github.com/8Dvibes/mindvalley-ai-mastery-students
2. Click green "Code" button → "Download ZIP"
3. Unzip to a folder like Documents or Desktop (NOT Downloads!)
4. Open the folder in VS Code

**Option B: GitHub CLI (If you have it)**
```bash
mkdir -p ~/GitHub && cd ~/GitHub
gh repo clone 8Dvibes/mindvalley-ai-mastery-students
code mindvalley-ai-mastery-students
```

---

## Step 2: Paste the First Day Prompt

Open Claude Code (orange icon in VS Code sidebar) and paste this entire prompt:

```
## AI Mastery First Day Setup

I just received the course materials for MindValley AI Mastery. Session 1 is December 3rd.

**IMPORTANT CONTEXT:**
- I'm a NON-TECHNICAL student - explain everything simply
- If you need to run commands, briefly explain what they do first
- If I seem confused, ask me for a screenshot
- The permissions you ask for are safe - I understand you need them to help me

**The GitHub repo is:**
https://github.com/8Dvibes/mindvalley-ai-mastery-students

**My current situation:**
- I have VS Code open with the Claude Code extension installed
- I downloaded the repo ZIP and unzipped it (OR I cloned it with git)
- I opened the folder in VS Code
- I'm now pasting this prompt into Claude Code

**Please help me in this order:**

1. **Prerequisites Check** - Do I have git and GitHub CLI installed? If not, help me install them.
2. **Folder Location** - Is this repo in a good location? If it's in Downloads, help me move it to ~/GitHub/
3. **Run setup.sh** - Verify my environment
4. **Account Check** - Walk me through SETUP.md to confirm I have all required accounts
5. **ONBOARDING Steps 3-7** - Guide me through Claude Desktop config, Claude Code config, Bridge test, N8N test, and Gemini test

**When asking for bash/terminal permissions:**
- Briefly explain what the command does
- Then proceed (I trust you)

**What I'm building (so I understand the why):**
I'm setting up tools that will let me build an AI customer service system - one that reads emails, drafts responses in my brand voice, checks with me before sending, and learns over time. This setup gets all the infrastructure ready.

Let's start with the prerequisites check!
```

**Claude Code will guide you through the rest!** Plan for 60-90 minutes total.

---

## What Happens Next

Claude Code will walk you through:
- ✅ Checking prerequisites (git, GitHub CLI)
- ✅ Moving the repo if it's in the wrong folder
- ✅ Running the verification script
- ✅ Setting up Claude Desktop
- ✅ Testing N8N connection
- ✅ Testing Gemini API

---

## If You Get Stuck

- **Screenshot the issue and stop** - We'll troubleshoot together
- **Wednesday Session (Dec 3)** - Group troubleshooting time
- **Friday Office Hours (Dec 5)** - Dedicated setup help

### Common Issues

| Issue | Solution |
|-------|----------|
| `setup.sh` permission denied | Run `chmod +x setup.sh` first |
| Claude Code not responding | Restart VS Code |
| N8N import fails | Check you're on Starter tier (not free) |
| Gemini API error | Re-copy key from aistudio.google.com (no extra spaces) |

See [troubleshooting-quick-ref.md](troubleshooting-quick-ref.md) for more.
