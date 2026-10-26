---
title: "WeChat"
description: "Mobile Inspector development documentation · WeChat"
---

# WeChat

Use the host adapter in an explicit internal mini-program build. Supply the real `wx` or compatible Taro host object; the SDK does not introduce a browser proxy.

```js
import { createInspector } from '@mobile-inspector/javascript';
import { installWechatCapture, wechatSender } from '@mobile-inspector/javascript/wechat';
const inspector = createInspector({ app: 'Synthetic mini program', platform: 'wechat', environment: 'staging' });
// Bind BEFORE wrapping, so diagnostic delivery cannot capture itself.
const rawHost = { request: wx.request.bind(wx) };
const send = wechatSender(rawHost);
const uninstall = installWechatCapture(inspector, wx);
// A stopped, explicitly confirmed manual-pair action:
// inspector.connect(pairJson, send);
// A separate recording action:
// inspector.start({ includeBodies: false });
```

The adapter wraps request/upload/download and socket lifecycle where the host exposes them. Upload/download bytes stay summaries. Chunk callbacks observe SSE without changing original callbacks or reading a second stream. Explicit application logging remains available through `inspector.log`.

Configure a system-trusted HTTPS ingestion endpoint in the mini-program platform's legal-domain settings. Native leaf pinning is not a browser/WeChat trust substitute. A custom camera scanner must be internal-only, stoppable and explicitly invoked; stop it before confirming bounded pairing JSON.

On account/environment change call `clear()` and `disconnect()`. On teardown also call `uninstall()`. Never enable an old DevTools-only logger on physical devices by copying its injection path. Verify actual host callbacks and device receipt separately from JavaScript tests.
