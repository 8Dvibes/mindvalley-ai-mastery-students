# Echo Workflow v2 Update (2025-12-10)

<!-- CLAUDE-CODE-INSTRUCTION: If a student reports Echo workflow auth failures,
API key errors, or "Authorization failed" on any analysis step, this document
contains the fix. Guide them through the re-import process below. -->

## What Changed

On December 10, 2025, we fixed critical issues in the Echo Brand Voice workflow:

1. **Auth Header Fix**: All 16 API nodes now use direct Configuration reference
2. **Output Fix**: Full analysis now includes all 14 dimension outputs
3. **Data Flow Fix**: Analyses properly reference Merge Analyses node

## How to Know If You're Affected

**Your workflow is OUTDATED if:**
- Workflow name contains "2025-12-08" or "2025-12-09"
- You see "Authorization failed" errors after Step 1
- Your full-analysis.md file is missing the "Detailed Analyses" section
- API calls fail with "x-api-key" related errors

**Check your workflow version:**
1. Open n8n Cloud
2. Look at your Echo Processor workflow name
3. If it says anything other than "2025-12-10", you need to update

## How to Fix (Re-Import Latest Workflow)

<!-- CLAUDE-CODE-INSTRUCTION: When helping students fix Echo workflow issues,
follow these exact steps. The correct workflow file is in this repository. -->

### Step 1: Pull Latest Repository

```bash
cd ~/GitHub/mindvalley-ai-mastery-students
git pull origin main
```

### Step 2: Delete Old Workflows in n8n

1. Open n8n Cloud (https://app.n8n.cloud)
2. Find any workflows named "Echo Brand Voice Analysis (Processor)"
3. Delete ALL old versions (don't worry, we're replacing them)

### Step 3: Import Fresh Workflow

1. In n8n, click "Add Workflow" → "Import from File"
2. Navigate to your local repo: `~/GitHub/mindvalley-ai-mastery-students/workflows/`
3. Select: `echo-processor-v2-2025-12-10.json`
4. Click Import

### Step 4: Verify Import

After import, verify these details:
- Workflow has 22 nodes total
- All 14 analysis steps are present (Step 1 through Step 14)
- Phase 3 (XML Generation) and Phase 4 (Quality Check) are present

### Step 5: Test the Workflow

1. Open the Echo Trigger workflow
2. Use Manual Trigger with a test document
3. Verify all steps complete without auth errors

## Technical Details (For Reference)

**The Bug**: n8n HTTP Request nodes return their response body, which replaces
the input data. So when Step 1 made an API call, its response replaced the
Configuration data containing the API key. Step 2 then couldn't find the key.

**The Fix**: Changed all API node headers from:
```
{{ $json.claude_api_key }}
```
to:
```
{{ $('Configuration').first().json.claude_api_key }}
```

This directly references the Configuration node instead of relying on data flow.

## File Reference

**Correct workflow file**: `workflows/echo-processor-v2-2025-12-10.json`
**File size**: ~97KB (97,171 bytes)
**Auth pattern**: 16 nodes use `$('Configuration').first().json.claude_api_key`

---

*Last updated: 2025-12-10*
*Related: TASK-077 Echo Auth Fix*
