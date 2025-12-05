# Claude Code Prompts - Copy & Paste Ready

All prompts tested and ready to use. Just copy, paste, and customize the [bracketed parts].

---

## Table of Contents

1. [GitHub & Repo Management](#github--repo-management)
2. [N8N Setup & Workflows](#n8n-setup--workflows)
3. [Knowledge Base (Google AI Studio)](#knowledge-base-google-ai-studio)
4. [Echo Brand Voice](#echo-brand-voice)
5. [Troubleshooting](#troubleshooting)
6. [Windows-Specific](#windows-specific)
7. [General Help](#general-help)

---

## GitHub & Repo Management

### Clone or Update Course Repository

```
I need to get the MindValley AI Mastery course files on my computer.

The repo URL is: https://github.com/8Dvibes/mindvalley-ai-mastery-students

Please:
1. Check if I already have a copy of this repo
2. If yes, help me update to the latest version
3. If no, clone it to my computer

Walk me through each step.
```

### Check for Repository Updates

```
I want to check if my course materials are up to date.

Please:
1. Check my current version (look for a VERSION file)
2. Tell me if I have the latest materials
3. If updates are available, walk me through getting them
```

### Convert ZIP Download to Git Repo

```
I downloaded the MindValley AI Mastery repo as a ZIP file, but now I'd like to convert it to a proper git repository so I can:
1. Pull updates when the instructors push new materials
2. Optionally backup my work to my own GitHub

The original repo is: https://github.com/8Dvibes/mindvalley-ai-mastery-students

Please walk me through converting my current folder to a git repo connected to the upstream source.
```

### GitHub Token Setup

```
I'm setting up GitHub authentication for the first time. I'm at the token creation page (github.com/settings/tokens/new).

Please guide me through:
1. What to name the token
2. What expiration to choose
3. Exactly which permission checkboxes to select
4. What to do after I generate it

I want to be able to push code to my own repositories.
```

---

## N8N Setup & Workflows

### Import Workflows Manually

```
I need to import N8N workflow files from my local computer into my N8N Cloud instance.

I do NOT want to set up API credentials right now - I want the simplest manual method.

Please:
1. Tell me exactly where my workflow JSON files are located in this project
2. Give me step-by-step instructions for manually importing them into N8N
3. Tell me which workflows I should import for the Session 1 homework

Keep it simple - just drag and drop or manual import, no API stuff.
```

### Find All Workflow Files

```
I need to import workflows from this project into my N8N Cloud.

Please:
1. List all the workflow JSON files in this project
2. Tell me which ones I need for Session 1 homework (and which order)
3. Give me the exact file paths so I can find them in Finder/Explorer

I'll drag-and-drop them into N8N manually.
```

### Verify Workflow Import

```
I just imported a workflow into N8N and want to make sure it's complete.

The workflow is: [name]
The JSON file is in: workflows/[filename].json

Please:
1. Count how many nodes should be in this workflow
2. List the key nodes and what they do
3. Tell me if there are any configuration steps I need to do after import
```

### Workflow Not Working

```
I imported a workflow into N8N and I'm trying to access its form URL, but I get "Problem loading form - workflow is deactivated or does not exist."

My N8N instance is: [your-name].app.n8n.cloud
The workflow name is: [workflow name]

Please help me:
1. Confirm the workflow exists and what state it's in
2. Tell me exactly how to activate it
3. Show me how to find the correct form URL

I'm new to N8N so please be specific about where to click.
```

### Debug Any Workflow Issue

```
My N8N workflow isn't responding when I try to trigger it.

Help me troubleshoot:
1. Is the workflow activated? (how do I check?)
2. Is the trigger URL correct?
3. Are there any errors in the workflow?

Walk me through the debugging process step by step.
```

---

## Knowledge Base (Google AI Studio)

### Create Knowledge Base

```
I need to create a knowledge base (corpus) in Google AI Studio for my AI agent.

Can you walk me through:
1. How to navigate to the right place in AI Studio
2. How to create a new corpus
3. What to name it
4. How to find and save my corpus ID (I'll need this later)

I'm at aistudio.google.com - what do I click first?
```

### Upload Documents

```
I have a corpus/knowledge base set up in Google AI Studio. Now I need to upload documents to it.

I have these types of documents ready:
- FAQ about my business
- Policies (returns, shipping, etc.)
- Product/service information
- Location/contact info

Can you guide me through:
1. How to upload files to my corpus
2. What file formats work best
3. How to verify the upload worked
4. How to test that my AI can search these documents
```

---

## Echo Brand Voice

### Create Megadoc

```
I need to create a "megadoc" of my writing samples for the Echo brand voice analysis.

Help me understand:
1. What counts as a good writing sample? (emails I've written, Slack messages, etc.)
2. What should I NOT include? (AI-generated content, templates)
3. How many samples do I need?
4. How should I format them in one document?
5. Can you give me a template to follow?

I want Echo to capture how I actually communicate, not generic AI voice.
```

### Run Echo Workflow

```
I'm ready to run the Echo Brand Voice workflow. I have my megadoc ready.

Please help me:
1. Where do I find the Echo form URL?
2. What fields do I need to fill in?
3. What happens after I submit? (I heard results come via email?)
4. What files will I receive and what do I do with them?
5. What if the email doesn't arrive?

I want to make sure I don't miss anything important.
```

### Echo Results Not Arriving

```
I submitted the Echo form but haven't received an email yet. It's been [X] minutes.

Can you help me troubleshoot:
1. Where should I check for the email?
2. What if it's in spam?
3. How do I know if Echo is still processing?
4. Is there a backup way to get my brand voice analysis?
```

### Add Brand Voice to Agent

```
I have my brand voice XML from Echo. Now I need to add it to my agent's prompt.

Can you help me:
1. Find the right file to edit (the Sugar/YGM prompt)
2. Find where the brand voice section goes
3. Replace the example brand voice with mine
4. Make sure I don't break the XML formatting
5. Update any business name references

Show me exactly where to paste and what to replace.
```

---

## Troubleshooting

### General Error

```
I'm getting this error: [paste error here]

I was trying to: [what you were doing]

My setup:
- OS: [Mac/Windows]
- What I've tried: [list attempts]

Can you help me fix this?
```

### Something Looks Different

```
I imported [workflow/file name] but it looks different from what Tyler showed in the demo.

Can you help me verify I have the complete version?

Please:
1. Read the original file from this repo
2. List what should be there
3. Tell me if anything is missing
```

### Security Check

```
I want to make sure I'm following security best practices in this project.

Please audit my setup:
1. Are there any API keys or secrets committed to this repo that shouldn't be?
2. Check if there's a .gitignore file and if it's properly configured
3. Are there any .env files that might contain sensitive data?
4. What security best practices should I follow as I build?

I'd rather be careful now than have problems later.
```

### Save Work Before Closing

```
Before I close VS Code, please help me save our work:

1. Create a file called "session-notes-[today's date].md" in a notes/ folder
2. Summarize what we accomplished in this conversation
3. List any next steps or things I should remember
4. Include any important commands or configurations we set up

This way I won't lose context when I come back.
```

---

## Windows-Specific

### Git-Bash PATH Error

```
I'm on Windows and getting this error:
"Error: Claude Code on Windows requires git-bash"

Please help me fix this:
1. First, search my computer to find where bash.exe is located
2. Then tell me the exact steps to set the CLAUDE_CODE_GIT_BASH_PATH environment variable
3. Walk me through it like I've never done this before

My Windows version is [Windows 10/11].
```

### Permission Issues

```
I'm getting a "permission denied" error on Windows.

The command I was running: [paste command]
The error: [paste error]

Help me fix this - do I need to run as Administrator?
```

---

## General Help

### I'm Lost

```
I'm working on [task name] for the AI Mastery course.

I'm stuck and not sure what to do next.

Can you:
1. Check what's already set up in my repo
2. Tell me what step I'm on
3. Guide me through the next action
```

### Understand the Big Picture

```
I'm new to development tools and taking the MindValley AI Mastery course. Can you give me a simple explanation of how these tools relate to each other:

1. VS Code - what is it and what do I do in it?
2. Claude Code - how is it different from Claude Desktop?
3. GitHub - what's it for in this course vs in general?
4. N8N - where does this fit in?

Explain like I'm not a developer. I just want to understand the big picture of what each tool does.
```

### Understand What I Built

```
I just ran the [workflow name] workflow and I want to understand what happened.

Please give me a "dissection" of this workflow:
1. What triggers it to start?
2. What are the main stages/phases?
3. For each AI node, what is it actually doing?
4. How does data flow from input to output?
5. Where are the decision points?

I want to understand this well enough to build something similar from scratch.
```

### Continue from Last Session

```
I'm continuing work from a previous session. Here's what I was working on:

[Paste any notes you have, or describe what you remember]

Please:
1. Review the current state of my project
2. Check what's been completed vs what's pending
3. Help me pick up where I left off
```

### Check If Something Is Required

```
I have the course files from a ZIP download. Claude Code keeps mentioning git and commits.

Simple question: Can I complete all the course homework without ever touching git or GitHub?

If yes, tell me to ignore the git stuff and move on.
If no, tell me exactly what git steps are required.
```

---

## Tips for Writing Your Own Prompts

### Include:
- **Context** - What you're working on
- **Specifics** - Error messages, file names
- **Desired outcome** - What success looks like
- **Your level** - "I'm new to this"

### Structure:
```
I'm doing [context].
I'm seeing [problem/error].
Please help me [desired outcome].
Walk me through it step by step.
```

---

*Compiled from MindValley AI Mastery | December 2024*
