---
title: "JavaScript 核心"
description: "Mobile Inspector development documentation · JavaScript 核心"
---

# JavaScript 核心

ESM 核心与 browser、wechat、DOM panel 适配器分开。先取得授权源码；下面的包名表示导出身份，不代表 npm 已公开发布。内部构建应引用本地 `packages/javascript` 包。

```js
import { createInspector } from '@mobile-inspector/javascript';
const inspector = createInspector({
  app: 'Synthetic example', platform: 'h5',
  build: 'internal', environment: 'staging'
});
// 仅在主动开始记录时调用。
inspector.start({ includeBodies: false });
const request = inspector.begin({ method: 'GET', url: 'https://example.test/catalog' });
request.response(200, { 'Content-Type': 'application/json' });
request.complete('complete');
inspector.log('info', 'Synthetic catalog loaded', 'catalog', { count: 3 });
inspector.stop();
```

`begin` 返回的句柄提供 `body`、`response`、`chunk`、`complete`、`cancel`、`error` 与 `event`。`chunk(Uint8Array)` 只能观察真实消费者已经读取的字节，不能依据传输结束伪造业务成功。

显式导出动作可调用 `exportJSONL({ includeBodies: false })` 获取有界本地记录。`clear()` 使代次失效并清空记录，换号与环境变化时还需 `disconnect()`。JavaScript 核心不替代原生业务传输，正式构建仍应排除。

浏览器自动观察见 [H5](h5.md)，小程序见[微信](wechat.md)。
