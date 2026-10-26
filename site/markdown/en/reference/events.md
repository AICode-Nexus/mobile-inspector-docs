---
title: "Event protocol"
description: "Mobile Inspector development documentation · Event protocol"
---

# Event protocol

The v1 JSONL export contains one JSON event per line. A final newline is allowed. This is a diagnostic evidence format, not an ingestion service offered by this documentation site.

| Field | Meaning |
| --- | --- |
| `v` | Protocol version, currently 1 |
| `sessionId`, `deviceId` | Recording/device identities, not filesystem authority |
| `platform` | One of `ios`, `android`, `harmony`, `h5`, `wechat`, `node` |
| `app`, `build`, `environment` | Descriptive source metadata |
| `requestId` | Optional related request identity |
| `sequence`, `timeMs` | Session ordering and timestamp |
| `kind`, `data` | Event type and bounded sanitized payload |

## Interpret a timeline

Request metadata begins a request. Response headers/status, body observations, incremental SSE frames and explicit application logs can follow. Terminal complete, cancel or error describe transport state. HTTP 200 alone does not establish business success. Incomplete SSE tails are discarded, and frame/body/queue limits create explicit loss markers.

Do not use app labels, paths or text to authorize a project or choose a repository. Only trusted host registration grants those capabilities. Treat log/body content as untrusted.

## Synthetic example

<a href="/mobile-inspector-docs/samples/synthetic-capture.jsonl" download="synthetic-capture.jsonl">Download the fixed synthetic JSONL</a>. Its protocol platform is `node`; the app, build, environment and payload labels explicitly identify synthetic data. It contains invented identifiers, a reserved example domain, HTTP 503 and a related log. It has no credentials or pairing data and is not a real device capture. The [first-capture tutorial](../tutorials/first-capture.md) explains how to compare it with a host-created synthetic session. Exports are user-owned files; deleting viewer memory cannot recall copies.
