---
title: "Configuration & state"
description: "Mobile Inspector development documentation · Configuration & state"
---

# Configuration & state

## Managed home

Selection priority is `--home PATH`, then `MOBILE_INSPECTOR_HOME`, then OS-user storage. The chosen directory must be new/empty or tool-owned. Foreign, escaping, symlinked or insecure state is rejected; legacy state is not silently migrated. Persistent state holds TLS identity and trusted project metadata. Runtime capabilities, body grants and captures belong to the current run; captures remain memory-only.

Never paste capability values into commands, URLs, prompts or exports. Viewer cookies and SDK pairing tokens cannot authorize machine APIs. `instance status --json` checks the authenticated owner; a stale file alone does not authorize process termination.

## Trusted project configuration

`project add --root PATH --name NAME` selects a trusted Git root. Build mappings require an existing commit and contained source root. If a registered root/commit becomes unavailable, the running owner's project list exposes availability diagnostics; remove deliberately or restore resources, then restart for validation. Do not edit the registry offline.

A minimal diagnosis policy is explicit and inert:

```json
{"schemaVersion":1,"automation":{"mode":"off"}}
```

Save through `project diagnosis-config --project ID --file PATH` using a regular, non-symlink UTF-8 JSON file (16 KiB maximum). Saving does not open a lease or run a model. Unknown fields reject. Provider descriptors contain only selected HTTPS endpoint/model and environment-variable name, never a credential value. Actual operational diagnosis remains unavailable; see [the lifecycle reference](diagnosis.md).
