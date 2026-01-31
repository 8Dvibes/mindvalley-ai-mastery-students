# Google Sheets Setup for Hattie B's Email Tracking

**Version:** 1.0
**Last Updated:** 2026-01-30
**Related:** [Hattie B Setup Guide](./hattie-b-setup-guide.md)

---

## Overview

The Hattie B email processing system uses Google Sheets as its central database for tracking all email drafts, approvals, and audit history. This document explains how to set up the required spreadsheet.

### Why Google Sheets?

- **Human-readable audit trail** - See all emails at a glance
- **Easy HITL integration** - Humans can view context during approval
- **No database setup required** - Works out of the box
- **n8n native support** - Google Sheets nodes are built-in

---

## Quick Setup (5 Minutes)

### Option 1: Import the CSV Template (Recommended)

1. Download the template: [`templates/email-tracking-sheet-template.csv`](../templates/email-tracking-sheet-template.csv)
2. Go to [Google Sheets](https://sheets.google.com)
3. Create a new blank spreadsheet
4. Name it: `Hattie B Email Tracking` (or your preferred name)
5. Go to **File > Import**
6. Upload the CSV file
7. Select **Replace current sheet**
8. Click **Import data**

### Option 2: Manual Setup

Create a new Google Sheet with these exact column headers in Row 1:

```
row_number | execution_id | gmail_thread_id | gmail_message_id | status | sender_email | original_subject | original_body | draft_subject | draft_body | qa_score | qa_status | revision_count | cinnamon_analysis | hatch_analysis | created_at | updated_at | sent_at | human_feedback
```

**Tip:** Copy the header row from the CSV template to ensure exact spelling.

---

## Column Reference

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `row_number` | Auto | Row number (auto-populated by Sheets) | `1`, `2`, `3` |
| `execution_id` | String | n8n execution ID for traceability | `exec_abc123xyz` |
| `gmail_thread_id` | String | Gmail conversation thread ID | `18d4a5b6c7d8e9f0` |
| `gmail_message_id` | String | Specific message ID within thread | `msg_123456789` |
| `status` | String | Current processing status | See status values below |
| `sender_email` | String | Customer's email address | `customer@example.com` |
| `original_subject` | String | Subject line of incoming email | `Question about my order` |
| `original_body` | Text | Full body of customer's email | (email content) |
| `draft_subject` | String | AI-generated response subject | `Re: Question about my order` |
| `draft_body` | Text | AI-generated response body | (draft content) |
| `qa_score` | Number | Bishop's quality score (0-100) | `85` |
| `qa_status` | String | QA pass/fail determination | `PASS`, `FAIL` |
| `revision_count` | Number | Number of revision iterations | `0`, `1`, `2` |
| `cinnamon_analysis` | JSON | Sentiment analysis from CinnaMon agent | `{"sentiment": "frustrated"...}` |
| `hatch_analysis` | JSON | Context/knowledge from Hatch agent | `{"relevant_docs": [...]...}` |
| `created_at` | DateTime | When the row was first created | `2026-01-30T10:30:00Z` |
| `updated_at` | DateTime | Last modification timestamp | `2026-01-30T10:35:00Z` |
| `sent_at` | DateTime | When email was actually sent | `2026-01-30T10:40:00Z` |
| `human_feedback` | Text | Revision instructions from human reviewer | `Make the tone more empathetic` |

### Status Values

| Status | Meaning |
|--------|---------|
| `processing` | Email is being processed by AI agents |
| `pending_approval` | Waiting for human review in Slack |
| `approved` | Human approved, ready to send |
| `sent` | Email has been sent to customer |
| `revision_requested` | Human requested changes |
| `revising` | AI is revising based on feedback |
| `escalated` | Escalated to human for manual handling |
| `failed` | Processing failed (check n8n logs) |

---

## Getting Your Sheet ID for n8n

The Sheet ID is required to configure n8n Google Sheets nodes.

### How to Find It

1. Open your Google Sheet in a browser
2. Look at the URL:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_IS_HERE/edit
   ```
3. Copy the long string between `/d/` and `/edit`

### Example

URL: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`

Sheet ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### Where to Use It in n8n

In your Hattie B workflows, update these nodes:
- **W1 (Email Processing Pipeline):** `Log to Sheets` node
- **W2 (Approval Handler):** `Update Sheet Row` node
- **SUB (Revision Processor):** `Update Sheet Row` node

---

## n8n Configuration

### Required Credentials

1. **Google Sheets OAuth2** - Set up in n8n Credentials
   - Go to n8n > Settings > Credentials
   - Add new Google Sheets credential
   - Complete OAuth flow with your Google account

### Node Configuration

For each Google Sheets node in the workflows:

```
Document ID: [Your Sheet ID from above]
Sheet Name: Sheet1 (or your sheet name)
```

---

## Sheet Permissions

### For Personal Use

No changes needed - you own the sheet.

### For Team Use

1. Click **Share** in Google Sheets
2. Add team members or set to "Anyone with the link can edit"
3. The n8n service account needs edit access

### Service Account Access (Advanced)

If using a Google Cloud service account instead of OAuth:
1. Share the sheet with the service account email
2. Grant **Editor** access

---

## Troubleshooting

### "Sheet not found" Error in n8n

- Verify the Sheet ID is correct (no extra spaces)
- Ensure the Google Sheets credential has access to the sheet
- Check that the sheet hasn't been moved to trash

### "Column not found" Error

- Column names must match exactly (case-sensitive)
- No leading/trailing spaces in header names
- Import the CSV template to ensure correct headers

### Data Not Appearing in Sheet

- Check n8n execution logs for errors
- Verify the credential has write permissions
- Ensure the sheet isn't protected/locked

### JSON Columns Showing as Text

This is expected. Google Sheets stores JSON as text strings. The workflows parse these strings when reading.

---

## Best Practices

### 1. Keep the First Row as Headers

Never delete or modify Row 1. The n8n nodes reference these column names.

### 2. Don't Manually Edit Active Rows

If a row has `status: processing` or `status: pending_approval`, don't edit it manually. Wait for the workflow to complete.

### 3. Archive Old Data Periodically

Move completed rows (status: `sent`) to an archive sheet monthly to keep the main sheet performant.

### 4. Back Up Your Sheet

Enable version history: **File > Version history > See version history**

---

## Claude Code Integration

### For AI Assistants Helping Students

When helping a student set up their Google Sheet:

1. **Verify the template is imported correctly:**
   ```
   Ask: "Can you share the header row from your Google Sheet?"
   Expected: 19 columns starting with row_number, ending with human_feedback
   ```

2. **Get the Sheet ID:**
   ```
   Ask: "What's the URL of your Google Sheet?"
   Extract: The string between /d/ and /edit in the URL
   ```

3. **Verify n8n credential:**
   ```
   Ask: "In n8n, go to Settings > Credentials > Google Sheets. Is there a credential listed?"
   If no: Guide them through OAuth setup
   ```

4. **Test the connection:**
   ```
   In n8n, create a test workflow with a Google Sheets node
   Configure with their Sheet ID
   Execute to verify read/write access
   ```

### Common Student Issues

| Issue | Solution |
|-------|----------|
| Wrong number of columns | Re-import CSV template |
| Typo in column name | Check against this doc, fix spelling |
| Can't find Sheet ID | Walk through URL extraction step by step |
| OAuth keeps failing | Check Google account permissions, try incognito |

---

## Related Documentation

- [Hattie B Setup Guide](./hattie-b-setup-guide.md) - Full system setup
- [n8n MCP Setup](./n8n-mcp-setup.md) - n8n configuration with Claude Code
- [Troubleshooting Quick Reference](./troubleshooting-quick-ref.md) - Common issues

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-30 | 1.0 | Initial documentation |
