# MindValley AI Mastery - Student Repository

Welcome to the AI Automation Mastery course! This repository contains everything you need to build production-ready AI automation systems.

---

## What's New (January 2026)

**Complete Video Walkthrough:** [Watch the Full Setup Guide](https://share.descript.com/view/JpaG0ceaiXL)

- **60-minute video walkthrough** - End-to-end demo of the Hattie B's system with setup instructions
- **All production workflows fixed and tested** - Verified working January 30, 2026
- **7 new n8n Claude Code skills** - AI-assisted workflow development and debugging
- **MCP setup documentation** - Connect Claude Code directly to your n8n account

> **Version 1.1.0** | Last Updated: January 30, 2026

---

## Quick Start

```bash
# 1. Clone this repository
git clone https://github.com/8Dvibes/mindvalley-ai-mastery-students.git
cd mindvalley-ai-mastery-students

# 2. Run setup verification
./setup.sh

# 3. Follow the onboarding guide
# See ONBOARDING.md for the 42-minute walkthrough
```

## Course Schedule

| Session | Date | Focus |
|---------|------|-------|
| Session 1 | Dec 3 (Wed) | Architecture & Knowledge Base Setup |
| Session 2 | Dec 5 (Fri) | Office Hours |
| Session 3 | Dec 10 (Wed) | Human-in-the-Loop Systems |
| Session 4 | Dec 12 (Fri) | Office Hours |

## Repository Structure

```
student-repo/
├── docs/               # Setup guides and reference
│   ├── api-keys-setup.md
│   ├── quick-start.md
│   └── troubleshooting-quick-ref.md
│
├── guides/             # Session-by-session learning guides
│   ├── 03-build-your-kb.md
│   └── session-1/      # Session 1 materials
│
├── workflows/          # N8N workflow JSONs (import these)
│   ├── 00-test-connection.json
│   └── [production workflows]
│
├── prompts/            # Agent prompt templates
│   ├── templates/      # Customizable templates
│   └── agents/         # Production examples
│
└── demo/               # Complete working demo (Hattie B's)
    └── hattieb/        # Full agent system example
```

## Before Class

1. **Complete SETUP.md** - Get all accounts and API keys ready
2. **Run setup.sh** - Verify your environment
3. **Review ONBOARDING.md** - 42-minute video walkthrough

## Key Resources

| Document | Purpose |
|----------|---------|
| [SETUP.md](SETUP.md) | Pre-class checklist (accounts, API keys) |
| [ONBOARDING.md](ONBOARDING.md) | 42-minute video walkthrough |
| [docs/quick-start.md](docs/quick-start.md) | 5-minute quick start |
| [docs/api-keys-setup.md](docs/api-keys-setup.md) | API key configuration |
| [docs/troubleshooting-quick-ref.md](docs/troubleshooting-quick-ref.md) | Common issues & fixes |

## Getting Help

- **During class**: Ask in the Zoom chat or raise hand
- **Between sessions**: Post in the Slack #ai-build-lab channel
- **Technical issues**: Check [troubleshooting guide](docs/troubleshooting-quick-ref.md) first

## What You'll Build

By the end of this course, you'll have:

1. **Knowledge Base** - Your brand's searchable document store (Gemini File Search)
2. **Expert Agent** - Answers questions using your knowledge base
3. **Email Processor** - Drafts responses matching your brand voice
4. **HITL System** - Human approval workflow for quality control
5. **Full Pipeline** - End-to-end automated email handling

The `demo/hattieb/` folder contains a complete working example you can reference throughout the course.

---

*Ready to start? Run `./setup.sh` to verify your environment, then open SETUP.md.*
