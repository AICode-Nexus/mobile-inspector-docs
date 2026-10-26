---
title: "JavaScript core"
description: "Mobile Inspector development documentation · JavaScript core"
---

# JavaScript core

The ESM core is separate from browser, WeChat and DOM panel adapters. Obtain authorized source first; the package name below is an export identity, not a claim that a public npm release exists. Wire the local `packages/javascript` package in your internal build.

```js
import { createInspector } from '@mobile-inspector/javascript';
const inspector = createInspector({
  app: 'Synthetic example', platform: 'h5',
  build: 'internal', environment: 'staging'
});
// Call only on an explicit recording action.
inspector.start({ includeBodies: false });
const request = inspector.begin({ method: 'GET', url: 'https://example.test/catalog' });
request.response(200, { 'Content-Type': 'application/json' });
request.complete('complete');
inspector.log('info', 'Synthetic catalog loaded', 'catalog', { count: 3 });
inspector.stop();
```

`begin` returns a request handle with `body`, `response`, `chunk`, `complete`, `cancel`, `error` and `event`. Call `chunk(Uint8Array)` only with bytes already read by the real consumer. Do not fabricate a successful business response from transport completion.

`exportJSONL({ includeBodies: false })` returns bounded local records after an explicit export action. `clear()` invalidates the generation and purges records; pair it with `disconnect()` on account/environment reset. Native application transport and production builds remain outside this JavaScript core.

For automatic browser observation use [H5](h5.md); for a mini program use [WeChat](wechat.md).
