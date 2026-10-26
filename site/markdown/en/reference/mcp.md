---
title: "MCP tools"
description: "Mobile Inspector development documentation · MCP tools"
---

# MCP tools

Exactly five read-only stdio tools share the existing project-scoped collector. There is no tool to change source, run shell, choose another root, start capture or repair a client.

| Tool | Read scope |
| --- | --- |
| `list_sessions` | Available sessions in the bound project |
| `get_request_trace` | One session/generation, optionally one request |
| `get_related_logs` | Session/request or incident log scope |
| `list_incidents` | Bounded candidate observations |
| `get_incident` | One retained incident with shared diagnosis status |

## Safe pagination

List first; pass its `sessionId` and `instanceGeneration` unchanged. Optional request selector narrows trace/log results. Default limit 50, maximum 200; byte limits can return fewer. Continue opaque `nextCursor` with the same selectors, generation, scope and limit until null. Cursors bind project, recording, revision and high-water mark. Expired, stale or malformed cursors reject.

Results expose `schemaVersion`, project/generation/revision, items, next cursor, completeness and gaps. `complete: false` cannot be interpreted as a full trace. Clear/revoke/expiry invalidates prior reads. Summary-only is the default; approved-body reads require a live per-session grant on every read. Authentication bodies, credentials, binary and audio remain excluded.

MCP protocol roundtrip, installed packaging and authenticated host interoperability are different evidence levels. New tools may not share an older host's acceptance scope. See [Codex setup](../integrations/codex.md) and [incidents](incidents.md).
