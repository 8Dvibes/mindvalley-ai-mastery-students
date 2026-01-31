# n8n MCP Server Setup Guide

Connect Claude Code directly to your n8n account for AI-assisted workflow development.

## What is MCP?

MCP (Model Context Protocol) allows Claude Code to interact with external tools and services. With the n8n MCP server, Claude can:

- List and inspect your workflows
- Create new workflows from templates
- Debug and fix workflow issues
- Validate workflow configurations
- Execute workflows for testing

## Prerequisites

- n8n Cloud account (or self-hosted n8n with API access)
- Claude Code installed (VS Code extension or CLI)
- Node.js 18+ installed

## Quick Setup

### 1. Get Your n8n API Key

1. Log into your n8n account
2. Go to **Settings** → **API**
3. Click **Create API Key**
4. Copy the key (you won't see it again)

### 2. Get Your n8n Instance URL

- **n8n Cloud**: `https://your-instance.app.n8n.cloud`
- **Self-hosted**: Your n8n server URL (e.g., `https://n8n.yourdomain.com`)

### 3. Install the n8n MCP Server

```bash
npm install -g @anthropic/mcp-server-n8n
```

### 4. Configure Claude Code

Add to your Claude Code settings (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": ["@anthropic/mcp-server-n8n"],
      "env": {
        "N8N_API_KEY": "your-api-key-here",
        "N8N_BASE_URL": "https://your-instance.app.n8n.cloud"
      }
    }
  }
}
```

### 5. Verify Connection

Restart Claude Code, then ask:
> "Can you list my n8n workflows?"

If connected, Claude will show your workflows.

## Available MCP Tools

Once connected, Claude Code gains access to these n8n tools:

| Tool | Description |
|------|-------------|
| `n8n_list_workflows` | List all workflows in your account |
| `n8n_get_workflow` | Get details of a specific workflow |
| `n8n_create_workflow` | Create a new workflow |
| `n8n_update_workflow` | Update an existing workflow |
| `n8n_delete_workflow` | Delete a workflow |
| `n8n_execute_workflow` | Run a workflow for testing |
| `n8n_get_executions` | View execution history |
| `n8n_validate_workflow` | Check workflow for errors |

## Example Prompts

**Debugging:**
> "Look at my W1 Pipeline workflow and check if all the nodes are connected correctly"

**Building:**
> "Create a new workflow that triggers on a webhook and sends a Slack message"

**Learning:**
> "Explain how the Set node works in my Filter workflow"

**Fixing:**
> "My workflow is failing at the HTTP Request node. Can you check the configuration?"

## Troubleshooting

### "Connection refused" or "Unauthorized"

- Verify your API key is correct
- Check the base URL matches your n8n instance
- Ensure your API key has the necessary permissions

### MCP server not starting

```bash
# Check if the package is installed
npm list -g @anthropic/mcp-server-n8n

# Reinstall if needed
npm install -g @anthropic/mcp-server-n8n
```

### Claude doesn't recognize n8n commands

- Restart Claude Code after changing settings
- Verify the settings.json syntax is valid JSON
- Check Claude Code logs for MCP errors

## Security Notes

- Your API key is stored locally in your settings file
- Never commit settings.json to version control
- Use environment variables in production environments
- Consider using a dedicated API key with limited permissions

## Related Resources

- [n8n API Documentation](https://docs.n8n.io/api/)
- [Claude Code MCP Guide](https://docs.anthropic.com/claude-code/mcp)
- [n8n Community Forums](https://community.n8n.io/)

---

*Part of the MindValley AI Mastery Student Repository*
