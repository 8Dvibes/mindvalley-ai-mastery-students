# Beginner's Glossary

**A plain-English guide to technical terms — with explanations of why each matters for what you're building**

You don't need to memorize these terms. They're here to help you understand the concepts we reference when explaining the architecture you're building. Much of this is already built into the system — these definitions just help you follow along. Refer back as needed.

---

## What You're Building (The Big Picture)

Before diving into terms, here's what you're creating: an **agentic customer service department** — first as a case study for Hattie B's (a hot chicken restaurant), then adaptable to your own business.

This system:
- Receives customer emails
- Understands what they're asking (using AI agents)
- Searches your knowledge base for accurate information
- Drafts a response in your brand voice
- Asks for your approval before sending
- Sends the response and logs everything

You'll build it once with the Hattie B's case study, learning the patterns and frameworks. Then you'll have the skills to recreate it for any business — yours, your clients', or future projects.

Every term below connects to one of these steps. When you see a new concept, ask: "Where does this fit in my system?"

---

## AI & Machine Learning

| Term | Definition |
|------|------------|
| **Agent (AI Agent)** | A specialized AI that handles one specific job — like an employee with a defined role. In your system, you're building multiple agents that work together: CinnaMon reads emails and detects sentiment (the "heat"), Hatch analyzes the question and gathers information, Librarian searches your knowledge base, Sugar writes the response in your brand voice, Bishop checks the draft quality before sending, and Holler briefs you in Slack for approval. **Key insight:** One AI trying to do everything fails. Specialists working together succeed. |
| **Agentic** | AI that takes actions, not just answers questions. Agentic AI can browse the web, write files, call APIs, and complete multi-step tasks autonomously. In your system, your email workflow is agentic — it doesn't just analyze emails, it *does* something about them (drafts responses, sends Slack notifications, updates logs). Example: ChatGPT answering "what's 2+2" = not agentic. Claude Code building your workflow = agentic. |
| **API** | Application Programming Interface — how programs talk to each other. Your API key is the password that lets your tools access AI services. In your system, APIs connect everything: N8N calls OpenRouter's API to access Claude, your workflow calls Gemini's API to search the KB, Slack's API receives your approval notifications. **Treat API keys like credit card numbers — don't share them publicly.** |
| **Embedding** | Converting text into numbers so AI can compare meaning, not just words. In your system, when you upload documents to your knowledge base, they get converted to embeddings. This is how AI finds "I'm angry about my order" when someone searches "customer complaint" — the meanings are similar even though words are different. |
| **Hallucination** | When AI confidently makes things up. In your system, this is exactly what RAG prevents. Without your knowledge base, AI might invent return policies or store hours. With RAG, it looks up the real answer first. Your guardrail: The Librarian agent searches your docs before answering, so responses are grounded in facts. |
| **LLM** | Large Language Model — the type of AI that powers Claude, ChatGPT, and Gemini. In your system, LLMs are the "brains" inside each agent. When CinnaMon analyzes sentiment or Sugar writes a response, an LLM is doing the thinking. |
| **Model** | A specific version of an AI — like different car models with different capabilities and prices. In your system, you'll use models like Claude Sonnet (fast, affordable) for most tasks, Claude Opus (slower, smarter) for complex reasoning, and Gemini for knowledge base search. Different tasks need different models. Expert analysis needs smarter models; simple routing can use faster ones. |
| **Prompt** | The instructions you give AI. A good prompt = a clear job description. In your system, every agent has a system prompt that defines: who it is (persona), what it should do (instructions), what it should NOT do (constraints), and how to format its output. You'll customize these prompts for your business. |
| **RAG** | Retrieval Augmented Generation — AI that looks up real information before answering, instead of guessing. In your system, this is the core of your email workflow: 1) Customer asks "What's your return policy?" 2) Hatch calls the Librarian to search your knowledge base 3) Librarian finds your actual return policy document 4) Sugar uses that real info to draft the response. **Without RAG:** AI guesses → wrong answers → angry customers. **With RAG:** AI looks up facts → accurate answers → happy customers. |
| **System Prompt** | Hidden instructions that define how an AI agent behaves. Customers never see these. In your system, each agent (CinnaMon, Hatch, Sugar, Bishop, Holler) has a system prompt that shapes its personality, knowledge, and rules. This is where you tell Sugar to "write like a friendly Southern restaurant" instead of "write like a formal law firm." |
| **Token** | How AI measures text. Roughly 1 token = 0.75 words. In your system, tokens affect: Cost (you pay per token), Context limits (how much AI can "remember"), and Speed (more tokens = slower responses). A typical email exchange might use 500-2000 tokens. |
| **Tool (AI Tool)** | A capability you give an AI agent — search, send email, update database. In your system, your agents use tools to take action: Librarian uses the search tool to query your KB, Hatch might use web search (Exa) for current information, the workflow uses Gmail tools to send responses. Tools are what make agents agentic — they can *do* things, not just think. |
| **Vector Store** | A specialized database for AI search, where documents are stored as embeddings. In your system, Google AI Studio's "File Search" is your vector store. When you upload your FAQs, policies, and brand guide, they become searchable by meaning, not just keywords. |

---

## Prompt Engineering

These techniques help you communicate effectively with AI:

| Term | Definition |
|------|------------|
| **Temperature** | Controls how creative vs. predictable AI responses are. Scale of 0 to 1. In your system: CinnaMon (0.0-0.3) uses low temp — you want consistent sentiment analysis, not creative interpretation. Sugar (0.6-0.8) uses higher temp — creativity for natural-sounding responses. Bishop (0.0) uses zero temp — QA evaluations must be deterministic and repeatable. **Rule of thumb:** Facts need low temp. Creativity needs higher temp. |
| **Zero-Shot vs. Few-Shot** | Zero-shot: Ask AI to do something without examples. Few-shot: Show AI examples of what you want first. In your system, your brand voice document is essentially few-shot prompting. You show Sugar examples of how your business writes, then ask it to write in that style. |
| **Chain of Thought** | Asking AI to "think step by step" before answering. In your system, Hatch uses chain of thought to analyze complex emails: "First, identify the customer's main concern... Next, check if this requires policy lookup... Then, determine the appropriate tone..." This prevents AI from jumping to wrong conclusions. |
| **Persona / Role** | Telling AI to act as a specific character. In your system, each agent has a persona: CinnaMon (named after the spice that adds warmth; detects emotional "heat"), Hatch (named after "hatching" perfect chicken; the expert analyst), Sugar (named after the Southern term of endearment; writes warm responses), Bishop (named after the founding Bishop family; the quality gatekeeper), Holler (named after the Nashville toast "Holler and Swaller!"; calls out the situation). Personas make responses feel human, not robotic. |
| **XML Structure** | Organizing prompts with tags like `<role>`, `<instructions>`, `<constraints>`. In your system, Tyler's standard agent structure keeps complex prompts readable: `<system>` contains `<role>` (who the agent is), `<instructions>` (what to do step-by-step), `<constraints>` (what NOT to do), and `<output_format>` (how to structure responses). |
| **Guardrails / Constraints** | Rules that tell AI what NOT to do. In your system, critical for customer service: "DO NOT promise refunds over $100 without manager approval", "DO NOT provide medical or legal advice", "DO NOT discuss competitors", "ALWAYS include a greeting and sign-off". Guardrails prevent embarrassing or costly AI mistakes. |
| **Output Format** | Telling AI exactly how to structure its response. In your system, agents pass structured data to each other: CinnaMon outputs `{sentiment: "frustrated", urgency: 4, themes: ["wait time"]}`, Hatch outputs `{core_question: "...", key_findings: "...", recommended_approach: "..."}`. Without defined output formats, agents can't communicate cleanly. |

---

## Development Tools

| Term | Definition |
|------|------------|
| **Terminal / Bash** | The text-based window where you type commands. In your system, Claude Code runs terminal commands for you — installing tools, managing files, running scripts. You just approve what it suggests. You'll see commands like `git clone`, `npm install`, `gh auth login`. |
| **VS Code** | Your workbench — the code editor where you view files and talk to Claude Code. In your system, VS Code is where you view and edit your project files, talk to Claude Code (orange icon in sidebar), and see your workflow configurations. |
| **Git / GitHub** | Version control — tracking changes to your files like "save points" in a game. In your system, course materials live on GitHub (cloud storage for code). You clone the repo to get your copy. You commit changes to save checkpoints. Don't worry about mastering Git — Claude Code handles the commands. |
| **Clone** | Copying a repository to your computer while keeping the connection to the original. In your system, you cloned the course repo to get all the starter files, templates, and workflows. |

---

## Workflow & Automation

| Term | Definition |
|------|------------|
| **N8N** | The visual automation platform where you build workflows by connecting blocks. In your system, N8N is where your email system lives. You connect nodes (blocks) like Lego pieces: Gmail Trigger → CinnaMon → Hatch → Sugar → Bishop → Holler → Slack |
| **Node** | A building block in N8N. Each node does one specific job. In your system, your workflow includes: Trigger nodes ("When new email arrives..."), AI nodes ("Ask Claude to analyze this..."), Action nodes ("Send Slack message..."), Logic nodes ("If sentiment is angry, then...") |
| **Pipeline** | The series of steps data flows through, from start to finish. In your system, your email pipeline: New Email → CinnaMon → Hatch → Sugar → Bishop → Holler → You → Send. Each arrow is data flowing from one agent to the next. |
| **Orchestration** | Coordinating multiple agents to accomplish a complex task. In your system, your N8N workflow is the orchestrator. It decides which agent runs when, what data passes between agents, when to pause for human approval, and what to do if something fails. Analogy: Like a head chef coordinating line cooks — one preps, one grills, one plates. |
| **HITL** | Human-in-the-Loop — a checkpoint where AI pauses for your approval. In your system, this is your safety net: 1) AI drafts an email response, 2) Holler sends it to Slack for your review, 3) You approve, edit, or reject, 4) Only then does it send. You stay in control. Nothing goes out without your OK. |
| **Trigger** | What starts a workflow running. In your system, your email trigger watches Gmail. When a new email arrives matching your criteria, the whole pipeline kicks off. |
| **Credential** | Saved login information so N8N can access services on your behalf. In your system, you'll add credentials for OpenRouter (to access Claude), Gmail (to read/send emails), Slack (to send approval requests), and Google AI Studio (for knowledge base). Add once, use everywhere in your workflows. |

---

## Files & Data

| Term | Definition |
|------|------------|
| **JSON** | A structured data format that both humans and computers can read. In your system, workflow exports are JSON files. Agents pass data as JSON: `{"customer": "John", "sentiment": "happy"}`. You'll import/export workflows as .json files. |
| **Markdown (.md)** | A simple way to format text. This glossary is written in Markdown. In your system, your knowledge base documents are Markdown files — easy to write, easy for AI to read. |

---

## Communication & Integration

| Term | Definition |
|------|------------|
| **Slack** | The messaging app where you receive approval requests and control your system. In your system, Slack is your command center. Holler sends: "New email from John. Here's my draft response. Approve?" You reply: "Looks good" or "Make it friendlier." The system acts on your feedback. |
| **OAuth** | Secure way for apps to access your accounts without sharing passwords. In your system, when you connect Gmail to N8N, you'll see a Google login popup. That's OAuth — you're granting permission without giving N8N your password. |

---

## Course-Specific Terms

### Your Agent Team

Here are the agents you're building in this course. Each has a name, personality, and specific job:

| Agent | Role | What It Does |
|-------|------|--------------|
| **CinnaMon** | Sentiment Analyzer | First in line. Reads incoming emails, detects emotion (frustrated? excited?), urgency, and themes. Named after the spice that "adds warmth." |
| **Hatch** | Expert Agent | Analyzes what the customer is really asking. Calls Librarian for KB info, searches the web if needed. Named after "hatching" perfect chicken. |
| **Librarian** | KB Search Tool | Searches your knowledge base using Gemini File Search. Called by other agents when they need information. |
| **Sugar** | Email Drafter | Writes the actual email response in your brand voice. Named after the Southern term of endearment ("Hey sugar!"). |
| **Bishop** | QA Agent | Quality gatekeeper. Scores the draft, passes or fails it. Named after the Bishop family who owns Hattie B's. |
| **Holler** | HITL Briefer | Summarizes everything for you in Slack. Named after the Nashville toast "Holler and Swaller!" |

### The Echo System (Brand Voice)

- **Echo Analyzer** — Extracts voice patterns from your writing samples
- **Echo Formatter** — Transforms AI text to match your brand voice
- **Echo Validator** — Checks if output sounds like you

| Term | Definition |
|------|------------|
| **The Fisk Method** | Tyler's 8-phase framework for engineering AI agents: 1) Discovery — Understand the problem deeply, 2) Requirements — Define exactly what to build, 3) Research — Learn from existing solutions, 4) Development — Build the system prompt, 5) Evaluation — Test and measure quality, 6) Enhancement — Improve based on feedback (TOAST), 7) Documentation — Write guides for users, 8) Deployment — Launch and monitor. In your system, you're using this method to build your email agents. |
| **TOAST Method** | Tyler's framework for iterative improvement: **T**ake your initial output → **O**bserve what worked/didn't → **A**nalyze and adjust → **S**tick it back in the oven → **T**est the results. In your system, when your first draft response isn't quite right, you TOAST it: see what's off, adjust the prompt, try again, repeat until great. **Key insight:** Great AI isn't built in one try — it's refined through iteration. |
| **Brand Voice** | How your business sounds in writing. In your system, your brand voice document teaches Sugar to write like YOU: Formal or casual? Professional or playful? Short and punchy or detailed and thorough? This is what makes AI responses feel authentic, not robotic. |
| **Knowledge Base (KB)** | Your collection of documents that AI searches for answers. In your system, your KB includes: FAQs (common questions and answers), Policies (returns, shipping, hours), Product info (menu, services, pricing), Brand voice guide. The Librarian searches this when customers ask questions. |
| **Reps** | Repetitions — practice! Like reps at the gym. In your system, when Sara or Tyler says "do your reps," they mean: run through the workflow multiple times. Send test emails. Approve drafts. Reject and revise. Build muscle memory for how the system works. |

---

## Core Concepts

| Term | Definition |
|------|------------|
| **Architect Methodology** | You design, AI builds. Like drawing blueprints instead of hammering nails. In your system, you don't write code. You write specifications: "I need an agent that analyzes customer sentiment... It should flag angry emails as high priority... Output should include urgency score 1-10..." Then AI (or Claude Code) builds it for you. |
| **Grounding** | Connecting AI responses to real information instead of letting it guess. In your system, RAG grounds your responses in your actual documents. This is why customers get accurate policy information instead of hallucinated nonsense. |
| **Context Window** | How much an AI can "remember" in a single conversation. In your system, affects how much information you can pass to an agent. Long customer email + full KB search results + brand guidelines = lots of context. Sometimes you need to summarize or chunk to fit. |
| **Iteration** | Improving through repeated cycles of build → test → learn → improve. In your system, your first workflow won't be perfect. You'll: 1) Test with sample emails, 2) See where responses fall short, 3) Adjust prompts and workflows, 4) Test again, 5) Repeat until quality is consistent. This is normal. This is the process. This is how experts work too. |

---

## Symbols You'll See

| Symbol | Meaning |
|--------|---------|
| `$` | Start of a terminal command (don't type the $) |
| `→` | Data flows to / leads to |
| `#` | Slack channel prefix, or comment in code |
| `@` | Mention someone/something |
| `< >` | Placeholder — replace with your value |

---

## Common Abbreviations

| Abbrev | Full Term |
|--------|-----------|
| AI | Artificial Intelligence |
| API | Application Programming Interface |
| CoT | Chain of Thought |
| HITL | Human in the Loop |
| KB | Knowledge Base |
| LLM | Large Language Model |
| QA | Quality Assurance |
| RAG | Retrieval Augmented Generation |
| TOAST | Take, Observe, Analyze, Stick, Test |
| YGM | You've Got Mail (email drafting pattern — Sugar uses this) |

---

## Still Confused?

That's okay! Here's what to do:

1. **Ask Claude Code** — "What does [term] mean in the context of my email workflow?"
2. **Check the FAQ** — `session-1-faq.md` has Q&A from real students
3. **Office Hours** — Fridays are for exactly these kinds of questions

Every expert started exactly where you are. The fact that you're reading this glossary means you're taking this seriously. That's the first step to mastery.

---

*Created by Sara for AI Mastery Build Lab | December 2024*
