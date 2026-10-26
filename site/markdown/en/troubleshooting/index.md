---
title: "Troubleshooting"
description: "Mobile Inspector development documentation · Troubleshooting"
---

# Troubleshooting

Start with `--version` and `doctor --json`. Record the selected version, home, command and fixed error code. Keep credentials, pairing JSON and private capture bodies out of support messages.

| Symptom | Check and next action |
| --- | --- |
| Private clone denied | Verify authorized repository access; public docs do not grant it |
| Owner conflict or stale state | Inspect ownership; choose a separate owned home, never kill an arbitrary PID |
| Phone QR unavailable | Select a routable LAN address; loopback is local-only |
| Camera denied | Use manual pairing; request camera only after a new Scan action |
| Configured, no events | Start recording explicitly; verify actual transport and destination |
| Browser/WeChat/Harmony TLS fails | Supply system-trusted HTTPS; check legal domains/origin policy |
| Trace has gaps | Check bounds/sequence/completeness; do not claim a full capture |
| MCP stale cursor | List again deliberately in the same project; never reuse another generation |
| Codex diagnosis rejected | `UNSUPPORTED_SANDBOX` is current admission, not a setting to bypass |

## Separate causes

A 503 is an HTTP observation, not proof of client code failure. A cancelled request may be expected. Missing source mapping means provenance is incomplete. Check [incident semantics](../reference/incidents.md) before assigning cause.

For USB, validate physical trust/cable/Xcode discovery before pairing. For export, inspect explicit log text even when bodies are excluded. On account/environment changes clear/disconnect; old callbacks should be invalidated. If a device behavior is uncertain, report it as unverified rather than replacing actual receipt with browser or unit-test evidence.
