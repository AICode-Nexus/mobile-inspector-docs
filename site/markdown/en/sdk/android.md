---
title: "Android / Kotlin"
description: "Mobile Inspector development documentation · Android / Kotlin"
---

# Android / Kotlin

Consume the Kotlin source package only in an internal build variant. The supplied baseline uses Kotlin 2.1.20, JVM 17, OkHttp 4.12 and Android API 26+. Android provides `org.json`; standalone JVM consumers must supply it.

```kotlin
val inspector = Inspector("Synthetic Android", "internal", "staging")
val client = existingClient.newBuilder()
    .addInterceptor(InspectorInterceptor(inspector))
    .build()
// Explicit start action after stopped pairing configuration:
inspector.start(includeBodies = false)
inspector.log("info", "Synthetic catalog loaded", "catalog")
// Account/environment boundary:
inspector.clear()
```

Keep your existing business client trust settings. The interceptor observes body writes/response reads already performed by the caller. Duplex, multipart, file, binary and audio payloads are not copied. Closing an unread response is cancellation, not successful completion. Use socket handles for byte/direction summaries only.

Native diagnostic transfer uses a separate OkHttp client with exact leaf pinning plus normal hostname/validity checks. QR hosts supply their own controlled scanner; stop/release it before `PairingScan.receive`, then confirm through stopped `configurePairing(pairJson, expectedRevision)`. Legacy active `connect` can send bounded backlog and has distinct behavior.

`exportJSONL(false)` removes HTTP/SSE bodies, not personal content hidden in explicit logs. Present a review warning. Use lifecycle invalidation callbacks for background/account races. Exclude camera manifests, diagnostic SDK and UI from release graphs; JVM mocks do not prove Android camera, permissions or physical TLS receipt.
