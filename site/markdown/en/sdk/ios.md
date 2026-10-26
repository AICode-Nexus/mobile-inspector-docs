---
title: "iOS / Swift"
description: "Mobile Inspector development documentation · iOS / Swift"
---

# iOS / Swift

Add the local `packages/swift` package to an internal iOS 15+ target. Select `MobileInspector`; `MobileInspectorUI` is optional. The source repository root is not a SwiftPM Git installation endpoint.

```swift
import MobileInspector
let inspector = Inspector(app: "Synthetic iOS", build: "internal", environment: "staging")
// Explicit recording action, bodies off by default:
inspector.start()
let request = inspector.beginRequest(method: "GET", url: "https://example.test/catalog")
request?.response(status: 200, headers: ["Content-Type": "application/json"])
request?.finish()
let logger = inspector.logger(scope: "catalog")
logger.log(level: "info", message: "Synthetic catalog loaded")
inspector.stop()
```

Tee existing response bytes with `request?.chunk(bytes)`; do not pre-read a stream. Retain scoped loggers for asynchronous work so an earlier generation cannot write into a later recording. System print/OSLog are not globally intercepted.

`InspectorPanel(inspector:)` supplies explicit recording, pairing and export. An internal host may attach `InspectorFloatingLauncher(inspector:)` to one safe-area-aware root overlay. Closing UI does not stop capture. Add accurate internal-only local-network and camera usage descriptions; request camera only on Scan.

`connect(pairJSON:)` uses a separate ephemeral diagnostic session with exact leaf DER SHA-256 pin, hostname and validity checks. It never changes business URLSession trust or installs a CA. Clear on account/environment change; use `lifecycleRevision` and `connect(pairJSON:expectedRevision:)` for custom confirmation races. Compilation/simulator checks do not prove physical permission, scanner release or event receipt.
