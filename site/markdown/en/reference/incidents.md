---
title: "Incident evidence"
description: "Mobile Inspector development documentation · Incident evidence"
---

# Incident evidence

Rules identify candidate observations, not established client defects. HTTP failure, configured business rejection, expected cancellation and missing evidence remain distinct.

## Evidence windows

Each incident retains up to 120 references from the preceding 30 seconds and 80 from the following 10 seconds, at most 200 total. Host receipt time controls windows; a device clock cannot extend them. Matching fingerprints merge inside the original deadline. A closed window emits readiness once even if no later event arrives.

Retention is 100 incidents per project and 400 per instance. Clear, revoke, expiry and generation changes remove derived records and invalidate callbacks. There are no disk incident snapshots.

## Completeness and meaning

Latency uses finite duration/elapsed values on response or complete summaries; first-byte time is not total latency. An error without a code yields generic network failure, without guessing cause from free text. Unknown codes remain unclassified; cancellation is informational and not automatic defect evidence.

Gaps include truncated windows, sequence gaps, capture limits, unavailable evidence and incident limits. A known build mapping is provenance, not proof of source contents or line numbers. Missing or ambiguous mapping stays explicit.

Lists and details are project/generation scoped, default 50 items and maximum 200 with a bounded byte budget. Summary is default. Approved bodies require current permission on every read. See [MCP pagination](mcp.md) and [diagnosis lifecycle](diagnosis.md).
