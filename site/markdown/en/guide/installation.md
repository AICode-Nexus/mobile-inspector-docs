---
title: "Installation"
description: "Mobile Inspector development documentation · Installation"
---

# Installation

## Access and distribution

The source repository is private. Confirm that your Git identity has authorized access before attempting this clone. Documentation access alone is insufficient. This is the 0.1.0 development source, not a public stable installation.

```sh
git clone https://github.com/AICode-Nexus/mobile-inspector.git
cd mobile-inspector
npm ci --ignore-scripts
node bin/mobile-inspector.mjs --version
node bin/mobile-inspector.mjs doctor --json
```

Select your reviewed source ref before installing. Do not substitute a moving branch when a workflow requires an immutable release. No stable public artifact is available to download from this site.

<!-- @generated:install -->

<!-- Generated from installation metadata; safe fields only. -->

## Installation contract

| Property | Value |
| --- | --- |
| Version | 0.1.0 (development) |
| Node.js | 22+ |
| Distribution | Private source or inspected local candidate; no stable public package |
| automaticDiagnosis | false |
| automaticRepair | false |

<!-- @endgenerated:install -->

## Local candidate and removal

An inspected local tarball can be installed into a separate user-owned prefix. Check its version and checksum against its delivery record. The runtime package includes CLI/server assets, not checkout-only tests, tools or these docs. Run `npm test` and `npm run verify:install` only in the complete checkout.

Use `--home PATH` to select a new or tool-owned state directory. Stop the foreground process before removing only your owned installation. Keep explicit exports separately. When moving a CLI installation, remove unchanged [project-local Codex setup](../integrations/codex.md) first and configure it again at its new path.

See [compatibility](compatibility.md) before adding a native SDK. Swift is consumed as the local `packages/swift` package; this repository does not offer a root SwiftPM Git dependency.
