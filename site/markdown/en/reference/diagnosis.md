---
title: "Diagnosis lifecycle"
description: "Mobile Inspector development documentation · Diagnosis lifecycle"
---

# Diagnosis lifecycle

## Current availability

`automaticDiagnosis` is false. The Codex adapter rejects with `UNSUPPORTED_SANDBOX` before Git/model work because effective no-tool enforcement is not certified. The direct Responses adapter is source-tested but provider compatibility remains unaccepted. These are not configurable waivers. Automatic repair (M4) is not implemented.

Capture, incident browsing and read-only MCP remain independent. Normal startup, pairing and recording make no model request. A real provider attempt needs explicitly selected trusted policy, owner-process credentials and separate authorization; a failed attempt is not permission to retry.

## Separate observation from hypothesis

An incident records facts; a diagnosis is a hypothesis. Incident states include open, diagnosing, diagnosed, needs-input and cancelled. Task states are queued, running, result, failed and cancelled. A failed task does not create an application defect. A recommendation is not edit permission or proof of resolution.

## Bounded orchestration

One foreground lease per project, at most four globally. One task executes per project; at most three pending per project and twelve globally. The five-minute deadline covers preparation and runner. Cancellation/deadline publishes a terminal view but retains capacity until termination is confirmed. No timer retries. Quiet-window and duplicate admission remain enforced.

The direct adapter makes one bounded HTTPS POST with no tools, redirects, retry, fallback or source retrieval. Structured result validation rejects invented evidence, traversal and unknown fields. Safe failures may expose fixed stage/code/HTTP-status details, never raw provider strings or bodies. Local fake-provider success proves only local classification. Start with [the synthetic lab](../tutorials/diagnosis.md), which performs no model request.
