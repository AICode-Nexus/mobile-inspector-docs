---
layout: home
title: "Mobile evidence. Clearly observed."
hero:
  name: Mobile Inspector
  text: "See the request. Keep the context."
  tagline: "Explicit capture for internal builds. Network, SSE and logs in one local evidence workspace."
  image:
    src: /assets/inspector-synthetic.svg
    alt: "Synthetic inspector illustration showing HTTP status, SSE and logs; no real device data"
  actions:
    - theme: brand
      text: "Start locally"
      link: /en/guide/quickstart
    - theme: alt
      text: "How capture works"
      link: /en/guide/capture-model
---

<div class="status-strip"><span class="status-dot"></span> 0.1.0 DEVELOPMENT · PRIVATE SOURCE · PUBLIC DOCS · SYNTHETIC EXAMPLES</div>

## Your first useful observation

The source repository is private: obtain authorized access and select a reviewed ref first. No public stable product package is offered. From that complete checkout:

```sh
npm ci --ignore-scripts
node bin/mobile-inspector.mjs start
```

Open the printed viewer URL and select the labelled synthetic example. This does not connect a real device or model.

<div class="principles">

<section>

### Explicit by design

Configure while stopped. Confirm the destination. Start recording separately. Verify actual receipt. Account and environment changes invalidate old work.

</section>

<section>

### Bounded and explainable

Memory budgets, incremental SSE and explicit gap markers. HTTP status, transport completion and business outcome stay distinct.

</section>

<section>

### One collector, shared evidence

Viewer, CLI and five read-only MCP tools share project-scoped evidence. Automatic diagnosis is unaccepted; M4 repair is not implemented.

</section>

</div>

## Choose your integration

[JavaScript](./sdk/javascript.md) · [H5](./sdk/h5.md) · [WeChat](./sdk/wechat.md) · [iOS](./sdk/ios.md) · [Android](./sdk/android.md) · [HarmonyOS](./sdk/harmonyos.md)

Continue with [CLI](./reference/cli.md) · [Codex / MCP](./integrations/codex.md) · [LAN / QR](./guide/connection-lan.md) · [USB](./guide/connection-usb.md) · [Privacy](./guide/privacy.md)
