# Student Q&A - Friday Office Hours (Dec 5, 2025)

**For Tyler & Sara** - Reference this doc during the live session.

---

## The Meta-Lesson

**Before diving in, here's the teachable moment:**

Every answer below includes a **"Claude Code Prompt"** - a copy-paste prompt the student can use to solve their issue with their own Claude Code agent.

**Why this matters:**
- This IS the skill we're teaching - learning to leverage AI assistants
- When you get stuck, your first instinct should be: "Can I prompt my way out of this?"
- Claude Code is your pair programmer - learn to ask it good questions
- The prompts below model HOW to ask for help effectively

**Tell students:** "We'll answer your question now, but we're also giving you a prompt you can use with Claude Code. This is how you solve problems going forward - you have a brilliant assistant, learn to use it!"

---

## Quick Navigation

| Priority | Questions | Theme |
|----------|-----------|-------|
| **HIGH** | Q14, Q12, Q11, Q4, Q3, Q15 | Setup blockers (Git/Windows/Echo) |
| **MEDIUM** | Q5, Q6, Q7, Q8, Q13 | Workflow & process confusion |
| **LOWER** | Q1, Q2, Q9, Q10 | Conceptual & strategy |

---

# HIGH PRIORITY - Setup Blockers

---

## Q14: Windows Git-Bash PATH Error
**Student:** Gisli Rafnsson
**Screenshot:** Yes - Shows VS Code with error banner

**The Error:**
> "Error: Claude Code on Windows requires git-bash. If installed but not in PATH, set environment variable CLAUDE_CODE_GIT_BASH_PATH=C:\Program Files\Git\bin\bash.exe"

**Answer:**

Hey Gisli! This is the most common Windows issue - you're not alone.

**Quick Fix (try this first):**
1. Close VS Code completely
2. Open Windows Settings > System > About > Advanced system settings
3. Click "Environment Variables"
4. Under "User variables", click "New"
5. Variable name: `CLAUDE_CODE_GIT_BASH_PATH`
6. Variable value: `C:\Program Files\Git\bin\bash.exe`
7. Click OK, OK, OK
8. **Restart VS Code** (important!)

**If that path doesn't work**, the file might be elsewhere:
- Try: `C:\Program Files (x86)\Git\bin\bash.exe`
- Or search your computer for `bash.exe`

---

### Claude Code Prompt for Gisli:

Once you can open Claude Code (even with the error showing), paste this:

```
I'm on Windows and getting this error:
"Error: Claude Code on Windows requires git-bash"

Please help me fix this:
1. First, search my computer to find where bash.exe is located
2. Then tell me the exact steps to set the CLAUDE_CODE_GIT_BASH_PATH environment variable
3. Walk me through it like I've never done this before

My Windows version is [Windows 10/11 - fill this in].
```

**Why this prompt works:** It tells Claude Code exactly what's wrong, asks for discovery (finding bash.exe), and requests step-by-step guidance at the right level.

---

**Root Cause:** Git was installed but Windows doesn't know where to find bash.exe.

**Prevention:** Add Windows-specific setup steps to SETUP.md.

---

## Q12: GitHub Token Setup
**Student:** Eloise Mathieu
**Screenshot:** Yes - Shows Claude Code guiding through token creation

**The Question:** Being asked to set up a GitHub token - is this right? Tyler didn't do this in the demo.

**Answer:**

Hi Eloise! Yes, you're on the right track - this is normal!

**Why Tyler didn't show this:** He already had GitHub configured from previous work. First-time setup requires authentication.

**The answers to your specific questions:**

**"What is the right option for Repository access?"**
- Select: **"All repositories"**

**"Do I need to add permissions?"**
- Yes! Check the **"repo"** checkbox (the top-level one)

**After you generate the token:**
1. Copy it immediately (you only see it once!)
2. Paste it when Claude Code asks
3. Store it in a password manager for backup

---

### Claude Code Prompt for Eloise:

If you get stuck during token setup, paste this:

```
I'm setting up GitHub authentication for the first time. I'm at the token creation page (github.com/settings/tokens/new).

Please guide me through:
1. What to name the token
2. What expiration to choose
3. Exactly which permission checkboxes to select
4. What to do after I generate it

I want to be able to push code to my own repositories.
```

**Alternative prompt** if you already created a token but it's not working:

```
I created a GitHub personal access token but something isn't working when I try to push code.

Can you help me:
1. Test if my GitHub authentication is working
2. If not, diagnose what's wrong
3. Walk me through fixing it

Run any commands you need to check the status.
```

---

**Root Cause:** GitHub requires authentication for pushing code. One-time setup.

**Prevention:** Add "GitHub Authentication" section to onboarding docs.

---

## Q11: Commit Command Confusion
**Student:** Eloise Mathieu
**Screenshot:** Yes - Shows Claude Code explaining commits

**The Question:** "I am told I have to commit the repo to my GitHub... makes no sense to me."

**Answer:**

Hi Eloise! Great question - and here's the important news: **you don't NEED to commit right now.**

**What Claude Code is telling you (correctly):**
- You downloaded a ZIP file, not a git clone
- Files are only on your local machine
- Committing would back them up to GitHub

**But here's the thing:** Committing to GitHub is **optional** for this course. It's a "nice to have" for backup, not a requirement.

**My recommendation:**
1. **Skip committing for now** - Focus on the actual homework
2. Your files are safe locally
3. If you want backup later, we can set it up

---

### Claude Code Prompt for Eloise:

If you're confused about whether you need to do something, try this:

```
I'm taking the MindValley AI Mastery course. I downloaded the repo as a ZIP file.

Someone mentioned I need to "commit" my changes, but I'm not sure if that's required.

Please check:
1. Is this folder a git repository or just regular files?
2. Do I NEED to commit/push to GitHub for the course homework?
3. If committing is optional, what would I be gaining by doing it?

Just tell me straight - should I worry about this now or focus on the homework?
```

**Why this prompt works:** It gives context (the course, ZIP download), asks for a clear assessment, and requests a direct recommendation.

---

**Root Cause:** ZIP download creates local-only files. Both ZIP and clone work for the course.

**Prevention:** Clarify in docs: "If you downloaded ZIP, commits are optional."

---

## Q4: ZIP vs Clone Confusion
**Student:** Joffrey Berti
**Screenshot:** No

**The Question:** "I asked Claude Code to commit after setup is done, but it tells me the repo is local (because I downloaded as ZIP). Yesterday you asked to download as ZIP, Claude Code proposes to clone - what do I need?"

**Answer:**

Hey Joffrey! This is a common point of confusion.

**The truth: Both methods work.** Here's the difference:

| Method | Pros | Cons |
|--------|------|------|
| **ZIP Download** | Simpler, no git knowledge needed | Can't easily get updates, can't push to GitHub |
| **Git Clone** | Can pull updates, can backup to GitHub | Requires git to be set up |

**My recommendation:** Stay with ZIP for now. Focus on the homework. We can help with git setup later if needed.

---

### Claude Code Prompt for Joffrey:

If you want to convert your ZIP folder to a proper git repo later:

```
I downloaded the MindValley AI Mastery repo as a ZIP file, but now I'd like to convert it to a proper git repository so I can:
1. Pull updates when the instructors push new materials
2. Optionally backup my work to my own GitHub

The original repo is: https://github.com/8Dvibes/mindvalley-ai-mastery-students

Please walk me through converting my current folder to a git repo connected to the upstream source.
```

**Or if you just want clarity:**

```
I have the course files from a ZIP download. Claude Code keeps mentioning git and commits.

Simple question: Can I complete all the course homework without ever touching git or GitHub?

If yes, tell me to ignore the git stuff and move on.
If no, tell me exactly what git steps are required.
```

---

**Root Cause:** Instructions said ZIP was fine, but didn't explain the commit limitations.

**Prevention:** Add to SETUP.md: "ZIP users: commits are optional."

---

## Q3: GitHub Account Purpose
**Student:** Joffrey Berti
**Screenshot:** No

**The Question:** "What is the GitHub account for? The prep work didn't mention it, but post-class docs reference it. What's the correlation?"

**Answer:**

Great question, Joffrey!

**Why GitHub wasn't in pre-class prep:** Honestly? It was an oversight.

**What your GitHub account is for:**

| Use Case | Required? | When |
|----------|-----------|------|
| Downloading course files | Yes (done!) | One-time |
| Backing up your work | Optional | If you want cloud backup |
| Getting course updates | Nice to have | When we push new materials |
| Personal future projects | Later | After the course |

**For THIS course:** Your GitHub work is done! You cloned/downloaded the repo, you're set.

---

### Claude Code Prompt for Joffrey:

If you want to understand how all the tools fit together:

```
I'm new to development tools and taking the MindValley AI Mastery course. Can you give me a simple explanation of how these tools relate to each other:

1. VS Code - what is it and what do I do in it?
2. Claude Code - how is it different from Claude Desktop?
3. GitHub - what's it for in this course vs in general?
4. N8N - where does this fit in?

Explain like I'm not a developer. I just want to understand the big picture of what each tool does.
```

**Why this prompt works:** It's honest about being new, lists specific tools, and asks for a big-picture explanation.

---

**Root Cause:** Pre-class prep focused on building tools but missed GitHub for getting materials.

**Prevention:** Add GitHub to SETUP.md prerequisites with explanation.

---

## Q15: Echo Form Deactivated
**Student:** Eloise Mathieu
**Screenshot:** Yes - Shows "Problem loading form" error

**The Error:**
> "Problem loading form - This usually occurs if the n8n workflow serving this form is deactivated or no longer exists"

**The URL she used:** `https://emc2consulting.app.n8n.cloud/form/echo-brand-voice-trigger`

**Answer:**

Hi Eloise! I see exactly what's happening.

**The issue:** That URL points to YOUR N8N workspace (emc2consulting), and the workflow is currently **inactive**.

**The fix is simple:**
1. Log into your N8N Cloud (emc2consulting.app.n8n.cloud)
2. Find the "Echo Brand Voice Analysis" workflow
3. Look at the top-right corner - you'll see a toggle that says "Inactive"
4. **Click that toggle to make it "Active"**
5. Try the form URL again

**Visual guide:**
```
In N8N workflow editor:
[Inactive] ← Click this toggle → [Active]
     ^                              ^
    gray                          green
```

---

### Claude Code Prompt for Eloise:

For any N8N form/webhook not working:

```
I imported a workflow into N8N and I'm trying to access its form URL, but I get "Problem loading form - workflow is deactivated or does not exist."

My N8N instance is: [your-name].app.n8n.cloud
The workflow name is: Echo Brand Voice Analysis

Please help me:
1. Confirm the workflow exists and what state it's in
2. Tell me exactly how to activate it
3. Show me how to find the correct form URL

I'm new to N8N so please be specific about where to click.
```

**General debugging prompt:**

```
My N8N workflow isn't responding when I try to trigger it.

Help me troubleshoot:
1. Is the workflow activated? (how do I check?)
2. Is the trigger URL correct?
3. Are there any errors in the workflow?

Walk me through the debugging process step by step.
```

---

**Root Cause:** New workflows default to Inactive. Students don't realize they need to activate.

**Prevention:** Add to homework: "IMPORTANT: Activate your workflow before testing (toggle in top-right)."

---

# MEDIUM PRIORITY - Workflow & Process

---

## Q5: N8N API Authorization for Claude Code
**Student:** Joffrey Berti
**Screenshot:** Yes - Shows Claude Code explaining it can't push to N8N directly

**The Question:** "Tyler mentioned Claude Code can ship workflows to N8N (at 2:03 in replay), but Claude Code says not authorized without API credentials. What do you advise?"

**Answer:**

Hey Joffrey! Claude Code gave you good advice in that screenshot.

**The reality:**
- Claude Code CAN push to N8N... but only with API setup
- For security, we recommend **manual import** for now
- The API setup adds complexity that's not worth it for learning

**The recommended approach:**

**Option 1: Manual Import (DO THIS)**
1. Open your N8N in browser
2. Open File Explorer to your `workflows/` folder
3. Drag the JSON file into N8N
4. Done in 30 seconds!

**Bottom line:** Follow Claude Code's Option 1 (manual import). It's faster and safer for learning.

---

### Claude Code Prompt for Joffrey:

For getting workflows into N8N without API setup:

```
I need to import N8N workflow files from my local computer into my N8N Cloud instance.

I do NOT want to set up API credentials right now - I want the simplest manual method.

Please:
1. Tell me exactly where my workflow JSON files are located in this project
2. Give me step-by-step instructions for manually importing them into N8N
3. Tell me which workflows I should import for the Session 1 homework

Keep it simple - just drag and drop or manual import, no API stuff.
```

**If you DO want API setup later:**

```
I'm ready to set up Claude Code to push workflows directly to my N8N instance.

My N8N Cloud URL is: [your-name].app.n8n.cloud

Please walk me through:
1. Creating an N8N API key
2. Configuring Claude Code to use it
3. Testing that it works

Note: Only help me with this if it's straightforward. If it's complex, tell me to stick with manual import.
```

---

**Root Cause:** Tyler mentioned an advanced capability without clarifying it's not recommended for beginners.

**Prevention:** Note in materials: "Manual import is recommended. API automation is an advanced topic."

---

## Q6: Pushing Workflows Without API
**Student:** Joffrey Berti
**Screenshot:** No

**The Question:** "After 2h15 in the call, it's really not clear how to push all the workflows into N8N without the API. Was this part of setup?"

**Answer:**

Hey Joffrey! You're right - this wasn't clearly explained. Here's the simple process.

**How to import workflows (no API needed):**

**Method 1: Drag and Drop**
1. Go to your N8N Cloud (yourname.app.n8n.cloud)
2. Click "Add workflow" or the + button
3. Open your local `workflows/` folder in a file browser
4. Drag the `.json` file directly onto N8N
5. Workflow appears!

**Method 2: Import Menu**
1. In N8N, click "Add workflow"
2. Click the ••• menu > "Import from file"
3. Select the JSON file
4. Click Open

---

### Claude Code Prompt for Joffrey:

```
I need to import workflows from this project into my N8N Cloud.

Please:
1. List all the workflow JSON files in this project
2. Tell me which ones I need for Session 1 homework (and which order)
3. Give me the exact file paths so I can find them in Finder/Explorer

I'll drag-and-drop them into N8N manually.
```

**After importing, if something looks wrong:**

```
I just imported a workflow into N8N and I want to verify it imported correctly.

The workflow is called: [name of workflow]

Can you:
1. Tell me what nodes should be in this workflow
2. What the trigger type should be
3. Anything I should configure before running it
```

---

**Root Cause:** Session focused on concepts, didn't walk through the literal drag-and-drop.

**Prevention:** Add Loom video: "How to Import Workflows (60 seconds)".

---

## Q7: Homework Part 2 Step-by-Step
**Student:** Joffrey Berti
**Screenshot:** Yes - Shows slide "Homework Part 2 - Personalize Sugar"

**The Question:** "Sara mentioned a step-by-step guide, I didn't find it. The last 30 minutes about Part 2 homework is a little fast."

**Answer:**

Hey Joffrey! You're right - the session moved quickly through Part 2.

**The 5 steps from the slide:**

| Step | What To Do | Where |
|------|------------|-------|
| 1 | Add Hattie B's knowledge to The Stacks | `demo/hattieb/` folder |
| 2 | Create your megadoc | Gather YOUR best writing samples |
| 3 | Run the Echo workflow | After importing to N8N |
| 4 | Add brand voice analysis to The Stacks | Echo output goes here |
| 5 | Update Sugar's system prompt | Add XML snippet |

**My recommendation:**
1. Focus on **Homework Part 1 first** (setup verification)
2. Part 2 is due by next Wednesday - you have time
3. Monday session = deeper KB Manager walkthrough

---

### Claude Code Prompt for Joffrey:

This is a powerful one - use Claude Code as your guide:

```
I need to complete Homework Part 2 for the MindValley AI Mastery course.

The assignment is "Personalize Sugar" with these steps:
1. Add Hattie B's knowledge to The Stacks
2. Create my megadoc
3. Run the Echo workflow
4. Add brand voice analysis to The Stacks
5. Update Sugar's system prompt with XML snippet

Please be my guide:
1. First, help me find all the Hattie B files in this repo
2. Walk me through each step one at a time
3. After each step, confirm what I should see before moving to the next
4. If I get stuck, help me troubleshoot

Let's start with Step 1. Where are the Hattie B files?
```

**Why this prompt works:** It gives Claude Code the full context of the assignment, asks for step-by-step guidance, and establishes an interactive pattern.

**For finding specific materials:**

```
Sara mentioned there's a "step-by-step PDF" for Homework Part 2 in the course materials.

Can you search this repo for:
1. Any PDF files
2. Any files mentioning "homework" or "part 2"
3. Any guides in the docs/ or guides/ folder

If you can't find a specific PDF, summarize what guidance IS available for Part 2.
```

---

**Root Cause:** Materials referenced in session may not all be in repo yet.

**Prevention:** Ensure all referenced materials are uploaded before session.

---

## Q8: Echo Workflow Missing Pattern Analysis Nodes
**Student:** Joffrey Berti
**Screenshot:** Yes - Shows his Echo workflow in N8N

**The Question:** "The Echo workflow looks very different from what Tyler showed - we don't have the pattern analysis nodes. Is this normal?"

**Answer:**

Hey Joffrey! Looking at your screenshot... actually, **you DO have the pattern analysis nodes!**

**What I see in your workflow:**
- Manual Trigger > Configuration > Validate Input > Validation OK
- Option Router splitting paths
- Build Personal Prompt / Build Common Prompt / Build Combined Prompt
- **Phase 1+2 Deep Analysis** (this IS pattern analysis!)
- **Phase 3: XML Generation**
- Parse XML > Phase 4: QC Validation > Parse Validation > QC Passed
- Final output nodes

**You have the complete workflow.** The nodes are just visually arranged differently than Tyler's demo.

**To verify:** Click on the "Phase 1+2 Deep Analysis" node. You should see configuration for analyzing writing patterns.

---

### Claude Code Prompt for Joffrey:

When a workflow looks different than expected:

```
I imported the Echo Brand Voice workflow into N8N but it looks different from what Tyler showed in the demo.

Can you help me verify I have the complete workflow?

Please:
1. Read the workflow JSON file from this repo (echo-brand-voice-v1-2025-11-27.json or similar)
2. List all the nodes that SHOULD be in the workflow
3. Tell me what the "pattern analysis" functionality is called in this workflow
4. Explain what each major section does

I want to make sure nothing is missing.
```

**General workflow verification:**

```
I just imported a workflow into N8N and want to make sure it's complete.

The workflow is: [name]
The JSON file is in: workflows/[filename].json

Please:
1. Count how many nodes should be in this workflow
2. List the key nodes and what they do
3. Tell me if there are any configuration steps I need to do after import
```

---

**Root Cause:** Visual layout differences between demo and imported workflow caused confusion.

**Prevention:** Add note: "Your imported workflow may be arranged differently - all nodes are there."

---

## Q13: VS Code Conversation Persistence
**Student:** Eloise Mathieu
**Screenshot:** No

**The Question:** "Can we save conversations in VS Code like in LLMs? I closed my window and lost the thread."

**Answer:**

Hi Eloise! Great question about Claude Code's behavior.

**Current behavior:**
- Claude Code conversations persist within a VS Code session
- If you close VS Code, you start a new conversation
- Previous context is not automatically saved

**To access past conversations:**
1. Look at the top of Claude Code panel
2. Click "Past Conversations" dropdown
3. Recent conversations appear there

**Best practices:**
- Don't close VS Code mid-task
- Copy important outputs to files
- Ask Claude to create files for anything you want to keep

---

### Claude Code Prompt for Eloise:

To save important work before closing:

```
Before I close VS Code, please help me save our work:

1. Create a file called "session-notes-[today's date].md" in a notes/ folder
2. Summarize what we accomplished in this conversation
3. List any next steps or things I should remember
4. Include any important commands or configurations we set up

This way I won't lose context when I come back.
```

**To recover context in a new session:**

```
I'm continuing work from a previous session. Here's what I was working on:

[Paste any notes you have, or describe what you remember]

Please:
1. Review the current state of my project
2. Check what's been completed vs what's pending
3. Help me pick up where I left off
```

**Why this prompt works:** It teaches students to have Claude Code create persistent artifacts, not rely on chat history.

---

**Root Cause:** Students expect LLM-style conversation history, but Claude Code is more session-based.

**Prevention:** Add to onboarding: "Tip: Save important outputs to files before closing VS Code."

---

# LOWER PRIORITY - Conceptual & Strategy

---

## Q1: Database for Relational Pricing Data
**Student:** Waheeda Butler (Anonymous)
**Screenshot:** No

**The Question:** "What database solutions for storing complex relational data in the knowledge base, specifically pricing structures? Using Airtable but it's slow with Firebase agent. Considering Supabase."

**Answer:**

Great question! Your instinct is correct - Airtable struggles with complex queries at agent speed.

**Recommended stack:**

| Data Type | Best Solution | Why |
|-----------|---------------|-----|
| **Relational data (pricing)** | Supabase | True Postgres, fast queries, great API |
| **Documents (policies, SOPs)** | Google Drive + Gemini | Already working, keep it |

**Migration path:**
1. Export Airtable pricing to CSV
2. Create Supabase project (free)
3. Import CSV to Supabase table
4. Update N8N workflows to query Supabase instead

**N8N has native Supabase nodes** - makes integration straightforward.

---

### Claude Code Prompt for Waheeda:

For planning the migration:

```
I currently use Airtable for my pricing data, but it's too slow for my AI agent.

I'm considering moving to Supabase while keeping my documents in Google Drive.

Please help me think through:
1. What would a good Supabase table structure look like for complex pricing (tiers, options, conditions)?
2. How would I connect Supabase to N8N?
3. What's the migration path from Airtable?
4. Are there any gotchas I should know about?

I don't need to do this right now - just want to understand the approach for after the course.
```

---

**For now:** Your current setup works. Optimization can wait until after the course.

---

## Q2: Pre-Launch Agent Building
**Student:** Wendy Shears
**Screenshot:** No

**The Question:** "I'm building a new business, launch is 6 months out, no customer emails yet. Should I start building now or wait?"

**Answer:**

**My recommendation: Start building NOW.** Here's why:

| Benefit | Why It Matters |
|---------|----------------|
| **Learn without pressure** | No real customers affected by mistakes |
| **Refine your knowledge base** | Forces you to document FAQs, policies, pricing |
| **Test your brand voice** | Practice before it matters |
| **Build the habit** | AI orchestration becomes second nature |

**What to do now:**
1. Complete course exercises with demo content
2. Start YOUR knowledge base - you know the common questions
3. Create your brand voice doc
4. Test with simulated emails

---

### Claude Code Prompt for Wendy:

For building your pre-launch knowledge base:

```
I'm building a new business that launches in 6 months. I want to start creating my AI knowledge base now, even though I don't have customer emails yet.

My business is: [brief description]

Please help me:
1. Create a list of the most likely customer questions I'll receive at launch
2. Draft a FAQ document structure I can start filling in
3. Suggest what policies/procedures I should document now
4. Create a brand voice questionnaire to help me define how I want to sound

Let's start building my knowledge base proactively!
```

**Why this prompt works:** It turns "I don't have data yet" into "let me predict and prepare."

---

**You're in the best possible position** - time to learn without the pressure of live customers.

---

## Q9: Dissecting What You Built
**Student:** Damon Allen
**Screenshot:** No

**The Question:** "Love the hand holding, but how do I dissect what I just did so I can replicate in the future?"

**Answer:**

Love this question, Damon! This is the mindset that separates builders from followers.

**Three ways to dissect and understand:**

1. **Read Node Outputs** - Click each node, see INPUT and OUTPUT
2. **Read Node Configuration** - Double-click to open settings
3. **Ask Claude Code to Explain** - Use the prompts below

---

### Claude Code Prompt for Damon:

This is THE meta-skill. Use these prompts liberally:

**To understand a workflow:**
```
I just ran the [workflow name] workflow and I want to understand what happened.

Please give me a "dissection" of this workflow:
1. What triggers it to start?
2. What are the main stages/phases?
3. For each AI node, what is it actually doing? (summarize the prompt)
4. How does data flow from input to output?
5. Where are the decision points?

I want to understand this well enough to build something similar from scratch.
```

**To understand a specific node:**
```
Explain what the "[node name]" node does in plain English.

- What input does it expect?
- What processing does it do?
- What output does it produce?
- Why is it necessary in this workflow?
```

**To learn the patterns:**
```
I've now completed [workflow name].

Help me extract the reusable patterns:
1. What's the general architecture here that I could apply to other problems?
2. What are the "building blocks" I should remember?
3. If I wanted to build something similar for [different use case], what would I change?

I want to understand the PRINCIPLES, not just the specific implementation.
```

**The big picture prompt:**
```
I'm learning to build AI workflows. Teach me how to think about workflow design:

1. How do I decide what should be a separate node vs combined?
2. When should I use AI vs simple logic?
3. What are common patterns for error handling?
4. How do I know if a workflow is well-designed?

Use the workflows in this repo as examples.
```

---

**The goal:** By Session 4, you should be able to sketch a workflow on paper before building it.

**This IS the skill** - understanding the patterns so you can create new ones.

---

## Q10: Tool Safety Concerns
**Student:** Anonymous
**Screenshot:** No

**The Question:** "How safe are the tools we're using for the setup for this automation?"

**Answer:**

Excellent question - security awareness is important.

**The tools we're using:**

| Tool | Safety Level | Why |
|------|--------------|-----|
| **VS Code** | Very Safe | Microsoft, industry standard, open source |
| **Claude Code** | Safe | Anthropic's official extension, permissions-based |
| **N8N Cloud** | Safe | SOC2 compliant, enterprise-grade |
| **Google AI Studio** | Safe | Google's infrastructure |
| **GitHub** | Safe | Microsoft-owned, industry standard |
| **Slack** | Safe | Enterprise security certified |

**What to be careful about:**
1. Don't share API keys in screenshots or Slack
2. Use test email accounts during learning
3. Review Claude Code suggestions before approving
4. Keep credentials out of workflow JSONs

---

### Claude Code Prompt for Security-Minded Students:

```
I want to make sure I'm following security best practices in this project.

Please audit my setup:
1. Are there any API keys or secrets committed to this repo that shouldn't be?
2. Check if there's a .gitignore file and if it's properly configured
3. Are there any .env files that might contain sensitive data?
4. What security best practices should I follow as I build?

I'd rather be careful now than have problems later.
```

**For ongoing security:**
```
Before I push any changes or share screenshots, please check:
1. Am I about to expose any API keys or secrets?
2. Is there anything sensitive in the files I'm about to share?

Help me build good security habits.
```

---

**You're learning in a safe sandbox.** The practices you build now will transfer to production safely.

---

# Summary: The Prompting Patterns

## What We're Teaching Here

Every prompt above follows patterns students can learn:

### Pattern 1: Context + Problem + Request
```
Context: "I'm taking the MindValley AI Mastery course..."
Problem: "I'm getting this error..."
Request: "Please help me [specific action]"
```

### Pattern 2: Discovery + Guidance + Verification
```
"Please:
1. Find/check [something]
2. Walk me through [fixing it]
3. Tell me how to verify it worked"
```

### Pattern 3: Teach Me the Principle
```
"I just did X. Now help me understand:
- Why did it work?
- What's the pattern here?
- How would I apply this elsewhere?"
```

### Pattern 4: Be My Guide
```
"I need to complete [task]. Please:
1. Break it into steps
2. Walk me through each one
3. Confirm before moving to the next"
```

## The Meta-Message

**Tell students:** "Your Claude Code agent is as smart as the prompts you give it. The prompts we're giving you today aren't magic - they're examples of how to ask for help effectively. Learn the patterns, not just the copy-paste."

---

# Patterns & Doc Updates Needed

## Common Themes from These Questions

1. **Git/GitHub confusion** - Not in pre-class prep
2. **ZIP vs Clone** - Both work, implications not explained
3. **Workflow activation** - Students don't know to turn on workflows
4. **Manual import vs API** - Need clearer "start simple" guidance
5. **Windows issues** - git-bash PATH is the #1 blocker

## Recommended Doc Updates

| Document | Add |
|----------|-----|
| `SETUP.md` | GitHub purpose, Windows git-bash setup |
| `ONBOARDING.md` | "Activate your workflow" step |
| `session-1-faq.md` | ZIP vs Clone section |
| `troubleshooting-quick-ref.md` | Windows PATH fix |
| New: `prompting-claude-code.md` | Common prompt patterns for students |

## For Monday Session

- Deeper KB Manager walkthrough (approved)
- Walk through workflow import visually
- Show workflow activation explicitly
- **Demo asking Claude Code for help** - make it a teachable moment

---

*Prepared for Friday Dec 5 Office Hours*
*14 questions answered, 7 screenshots reviewed*
*Claude Code prompts included for each issue*
