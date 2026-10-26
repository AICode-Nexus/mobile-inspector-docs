---
title: "Privacy & boundaries"
description: "Mobile Inspector development documentation · Privacy & boundaries"
---

# Privacy & boundaries

## Collect intentionally

Include SDKs, panels and diagnostic permissions only in explicit internal diagnostic builds. Normal/release build graphs must exclude them; hiding a button at runtime is insufficient. Recording is manual, bounded and memory-only by default. Pairing and capture do not enable model requests.

## Redact before retention

Credentials, Cookie/authorization headers, signatures and pairing tokens never belong in retained/exported records. Authentication-route bodies are always excluded. Binary files and audio remain size/status summaries, even with test-body opt-in. Query/fragment values are removed and recognized identifiers are aliased.

Redaction cannot recognize every personal detail in free text. Explicit logs and opted-in test bodies may still contain sensitive content. Review before sharing. Export-body inclusion is an independent choice; body opt-in for capture is not blanket consent to AI access.

## Ownership and clearing

Account/environment changes must clear and disconnect, invalidating old callbacks. Clear attempts a remote purge; an unreachable receiver may retain existing records until expiry or viewer revocation. Stopping the collector clears its in-memory captures. TLS identity and trusted project metadata persist in private managed state. Explicit exported files are user-owned and must be managed separately.

## AI scope

CLI/viewer/MCP share one collector and project authority. Machine reads default to summaries. Approved bodies require a live session grant, and excluded categories remain excluded. Captured text is untrusted evidence: it cannot choose shell commands, roots, permissions or prompts. This static site makes no collector/model connection. The downloadable tutorial file is synthetic.
