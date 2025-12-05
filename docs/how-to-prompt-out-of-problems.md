# How to Prompt Your Way Out of Problems

**The real skill we're teaching:** When you get stuck, your first instinct should be "Can I ask Claude Code to help me fix this?"

---

## Why This Matters

Every tool breaks. Every setup has edge cases. Every workflow hits snags.

The difference between someone who stays stuck for hours and someone who gets unstuck in minutes? **Knowing how to ask for help effectively.**

Claude Code is your pair programmer. It can see your files, run commands, and guide you step-by-step. But it's only as helpful as the questions you ask.

This guide teaches you **four prompting patterns** that work for almost any problem you'll encounter — not just in this course, but in any technical work going forward.

---

## The Four Patterns

### Pattern 1: Context + Problem + Request

**When to use:** You hit an error or something isn't working.

**The structure:**
```
Context: Where you are and what you're doing
Problem: What's going wrong (include error messages!)
Request: What you need help with
```

**Example:**
```
I'm taking the MindValley AI Mastery course and working on Homework Part 2.

I'm getting this error when I try to access my Echo form:
"Problem loading form - This usually occurs if the n8n workflow
serving this form is deactivated"

Please help me figure out why this is happening and how to fix it.
```

**Why it works:** Claude Code knows the course context, sees the exact error, and understands what outcome you need. No guessing required.

**Bad version (too vague):**
```
Echo isn't working. Help?
```

---

### Pattern 2: Discovery + Guidance + Verification

**When to use:** You're not sure what's wrong, or you need to find something first.

**The structure:**
```
1. Find/check [something]
2. Walk me through [fixing it]
3. Tell me how to verify it worked
```

**Example:**
```
I need to import workflows into N8N but I'm not sure which files to use.

Please:
1. Find all the workflow JSON files in this project
2. Tell me which ones I need for Session 1 homework
3. Walk me through importing them into N8N
4. Tell me how to verify they imported correctly
```

**Why it works:** You're asking Claude Code to do the detective work first, then guide you, then confirm success. Complete problem-solving cycle.

**Another example:**
```
I'm on Windows and Claude Code says it can't find git-bash.

Please:
1. Search my computer to find where bash.exe is located
2. Walk me through setting the environment variable
3. Tell me how to verify it's working after I restart VS Code
```

---

### Pattern 3: Teach Me the Principle

**When to use:** Something worked, but you don't understand WHY. You want to learn, not just fix.

**The structure:**
```
I just did [X]. Now help me understand:
- Why did it work?
- What's the pattern here?
- How would I apply this to something else?
```

**Example:**
```
I just ran the Echo workflow and got my brand voice analysis.

Help me understand what actually happened:
1. What did each step of the workflow do?
2. Why is it structured as multiple phases instead of one big prompt?
3. If I wanted to analyze something else (like competitor messaging),
   how would I adapt this pattern?

I want to understand the PRINCIPLES, not just follow the steps.
```

**Why it works:** This is how you go from "following tutorials" to "building your own things." You're extracting the reusable knowledge.

---

### Pattern 4: Be My Guide

**When to use:** You have a multi-step task and want Claude Code to walk you through it interactively.

**The structure:**
```
I need to complete [task].

Please be my guide:
1. Break it into steps
2. Walk me through each one
3. Confirm what I should see before moving to the next
4. If I get stuck, help me troubleshoot
```

**Example:**
```
I need to complete Homework Part 2 for the MindValley AI Mastery course.

The assignment is "Personalize Sugar" with these steps:
1. Add Hattie B's knowledge to The Stacks
2. Create my megadoc
3. Run the Echo workflow
4. Add brand voice analysis to The Stacks
5. Update Sugar's system prompt

Please be my guide:
1. Help me find all the files I need
2. Walk me through each step one at a time
3. After each step, confirm what I should see before moving on
4. If something doesn't work, help me troubleshoot

Let's start with Step 1. Where are the Hattie B files?
```

**Why it works:** You've turned Claude Code into an interactive tutor. It won't dump everything at once — it'll pace the guidance and check in with you.

---

## Quick Reference Card

| Situation | Pattern | Prompt Starter |
|-----------|---------|----------------|
| Something broke | Context + Problem + Request | "I'm working on X and getting this error: [error]. Help me fix it." |
| Not sure what's wrong | Discovery + Guidance + Verification | "Find X, walk me through fixing it, tell me how to verify." |
| Want to understand why | Teach Me the Principle | "I just did X. Why did it work? What's the pattern?" |
| Multi-step task | Be My Guide | "I need to do X. Break it into steps and walk me through each one." |

---

## Pro Tips

### Include error messages exactly

Don't paraphrase errors. Copy and paste them. The exact wording matters.

```
Good: "Error: CLAUDE_CODE_GIT_BASH_PATH not set"
Bad:  "Something about git bash not working"
```

### Tell Claude Code your skill level

It adjusts explanations based on context.

```
"I'm new to N8N - please be specific about where to click."
"I understand APIs but I've never used webhooks before."
```

### Ask for verification steps

Don't assume it worked. Ask how to confirm.

```
"After I do this, how do I verify it's actually working?"
```

### Save important outputs to files

Claude Code conversations don't persist forever. If something important comes up:

```
"Before we finish, save these instructions to a file called
setup-notes.md so I don't lose them."
```

---

## The Bigger Picture

These patterns aren't just for this course. They work with:

- Any AI coding assistant (GitHub Copilot, Cursor, etc.)
- ChatGPT, Claude.ai, or any chat-based AI
- Even human experts (clear questions get better answers)

**The meta-skill:** Learning to articulate what you need clearly and completely.

When you ask good questions, you get unstuck faster. When you ask for principles, you learn faster. When you ask for guided walkthroughs, you build confidence faster.

---

**Your Claude Code agent is as smart as the prompts you give it. Now you know how to give it great ones.**

---

*Created by Sara for AI Mastery Build Lab | December 2024*
