# W2 Approval Handler - Credential Setup

When you import the W2 Approval Handler workflow, N8N will prompt you to configure credentials. Here's what you need:

## Required Credentials

### 1. Slack API
- Go to https://api.slack.com/apps
- Create an app or use existing
- Get Bot User OAuth Token
- In N8N: Credentials → New → Slack API → Paste token

### 2. OpenAI API
- Go to https://platform.openai.com/api-keys
- Create new API key
- In N8N: Credentials → New → OpenAI API → Paste key

### 3. Google Sheets OAuth2
- In N8N: Credentials → New → Google Sheets OAuth2
- Follow OAuth flow to connect your Google account
- Grant access to Sheets

### 4. Gmail OAuth2
- In N8N: Credentials → New → Gmail OAuth2
- Follow OAuth flow
- Grant send/read permissions

## After Import

1. Open the imported workflow
2. For each node with a warning icon, click it
3. Select the appropriate credential from dropdown
4. Save workflow
5. Activate workflow
