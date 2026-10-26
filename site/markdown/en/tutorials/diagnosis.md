---
title: "Synthetic diagnosis lab"
description: "Mobile Inspector development documentation · Synthetic diagnosis lab"
---

# Synthetic diagnosis lab

This is a source-only synthetic lab for incident orchestration. It is not an operational model setup guide. Current automatic diagnosis is false; Codex admission is `UNSUPPORTED_SANDBOX`, provider compatibility is unaccepted and M4 repair is unimplemented.

## Run fake runners only

From the authorized complete source checkout, with locked dependencies installed:

```sh
npm run verify:diagnosis
npm run verify:responses
```

Default runs own temporary synthetic fixtures and fake runners/providers. They do not contact a real model, read business accounts or configure global authentication. They are not present in an installed runtime tarball.

## What to inspect

Check that observations and task states remain separate, cancellation invalidates old callbacks, limits/quiet windows reject repeated work, and CLI/viewer/MCP share the same safe failure authority. A diagnosis result is a hypothesis and never edit permission. Failure details are fixed stage/code enums; raw provider text is excluded.

Local tests can validate strict JSON shape, scoped references, malformed output rejection, one-POST bounds and owned cleanup. They cannot certify a provider, host tool inventory, source cause, device behavior or live deployment.

## Stop at the boundary

Do not add a real policy flag to these commands without separate explicit authorization. A real request may be billed; failed compatibility is not permission for retries, protocol relaxation, provider fallback or authentication changes. Do not weaken the Codex gate to make the lab appear operational. For useful model-free inspection use [incidents](../reference/incidents.md) and [the five MCP tools](../reference/mcp.md).
