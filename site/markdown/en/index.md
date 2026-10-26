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
      text: "Watch the 75-second guide"
      link: /en/tutorials/first-capture#animated-guide
---

<div class="status-strip"><span class="status-dot"></span><span class="status-copy">0.1.0 DEVELOPMENT · PRIVATE SOURCE · PUBLIC DOCS · SYNTHETIC EXAMPLES</span></div>

<div class="home-start">

<div>

## Start with a local observation

The source repository is private: obtain authorized access and select a reviewed ref first. No public stable product package is offered. Start your local viewer from that complete checkout.

</div>

<div>

```sh
npm ci --ignore-scripts
node bin/mobile-inspector.mjs start
```

Open the printed viewer URL and select the labelled synthetic example. This does not connect a real device or model.

</div>

</div>

<div class="principles">

<section>

### Explicit capture

Configure while stopped. Confirm the destination. Start recording separately. Verify actual receipt. Account and environment changes invalidate old work.

</section>

<section>

### Bounded evidence

Memory budgets, incremental SSE and explicit gap markers. HTTP status, transport completion and business outcome stay distinct.

</section>

<section>

### Shared tools

Viewer, CLI and five read-only MCP tools share project-scoped evidence. Automatic diagnosis is unaccepted; M4 repair is not implemented.

</section>

</div>

## Choose your integration

<nav class="integration-links" aria-label="SDK integration">

[JavaScript](./sdk/javascript.md)

[H5](./sdk/h5.md)

[WeChat](./sdk/wechat.md)

[iOS](./sdk/ios.md)

[Android](./sdk/android.md)

[HarmonyOS](./sdk/harmonyos.md)

</nav>

Read [how capture works](./guide/capture-model.md), or continue with [CLI](./reference/cli.md) · [Codex / MCP](./integrations/codex.md) · [LAN / QR](./guide/connection-lan.md) · [USB](./guide/connection-usb.md) · [Privacy](./guide/privacy.md)
