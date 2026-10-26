---
title: "HarmonyOS / ArkTS"
description: "Mobile Inspector development documentation · HarmonyOS / ArkTS"
---

# HarmonyOS / ArkTS

Use the source package's `Index.ets` from an explicit internal ArkTS build. The SDK and ArkUI panel remain native; no JavaScript bridge or replacement business transport is required.

```typescript
const inspector = new Inspector(nativeRuntime(), 'Synthetic Harmony', 'internal', 'staging');
// Explicit recording action:
inspector.start(false);
const handle = inspector.begin('GET', 'https://example.test/catalog', {});
handle.response(200, {});
// Observe original bytes only: handle.chunk(incomingBytes, isSse);
handle.finish('complete');
inspector.log('info', 'Synthetic catalog loaded', 'catalog');
inspector.stop();
const jsonl = inspector.exportJSONL(false);
inspector.clear();
```

Logs accept strings and optional JSON-text metadata, avoiding arbitrary getters/cycles. Only adapted application logs are visible; no global hilog interception is implied. `InspectorPanelActions` requires explicit pairing/export callbacks and app-neutral foreground lifecycle actions. Notifications coalesce for bounded rendering work.

`TrustedSender` relies on default RCP system chain, hostname and validity checks. It does not accept the desktop default self-signed certificate. Supply a system-trusted HTTPS endpoint. The pairing fingerprint's shape is validated but is not enforced leaf pinning on this platform; do not claim otherwise or add a trust bypass.

A custom scanner must stop/release before delivering bounded JSON, cancel on background/disposal/account change and expose synchronous foreground state. Cleanup failure blocks a new capture until process restart. Offline `.ets` logic tests and host compilation are separate from physical Scan Kit, camera release and trusted-TLS acceptance.
