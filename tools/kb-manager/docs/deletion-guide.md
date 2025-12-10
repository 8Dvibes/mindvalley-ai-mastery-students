# The Stacks - Deletion Guide

## Quick Summary

**Can't delete individual documents?** Use "Delete Store" instead and re-upload what you want to keep.

## Why Individual Document Deletion Is Limited

When you upload documents to Gemini File Search, they get "chunked" - split into smaller pieces for better search. The Gemini API doesn't provide a way to delete these chunks individually through the standard API.

## Recommended Approach: Delete & Rebuild

1. **Delete the entire store** using the "Delete Store" button
2. **Create a new store** with the same name
3. **Re-upload** only the documents you want to keep

This is faster than trying to delete individual files and ensures a clean knowledge base.

## When You Might Need Individual File Deletion

If you have a large knowledge base (100+ documents) and frequently need to remove single files, see the [GCP Service Account Setup Guide](gcp-service-account-setup.md) for an advanced solution.

## Tips

- **Before deleting a store**: Note which documents you want to keep
- **Naming convention**: Use descriptive store names so you know what's in them
- **Regular cleanup**: Periodically review and consolidate your stores
