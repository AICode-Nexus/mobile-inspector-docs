---
title: "HarmonyOS / ArkTS"
description: "Mobile Inspector development documentation · HarmonyOS / ArkTS"
---

# HarmonyOS / ArkTS

在显式内部 ArkTS 构建中使用源码包 `Index.ets`。SDK 与 ArkUI 面板保持原生，不要求 JavaScript 桥或替换业务 Transport。

```typescript
const inspector = new Inspector(nativeRuntime(), 'Synthetic Harmony', 'internal', 'staging');
// 显式开始记录：
inspector.start(false);
const handle = inspector.begin('GET', 'https://example.test/catalog', {});
handle.response(200, {});
// 只观察原字节：handle.chunk(incomingBytes, isSse);
handle.finish('complete');
inspector.log('info', 'Synthetic catalog loaded', 'catalog');
inspector.stop();
const jsonl = inspector.exportJSONL(false);
inspector.clear();
```

日志接受字符串和可选 JSON 文本元数据，不执行任意 getter 或循环对象。只显示显式接入的应用日志，不代表全局拦截 hilog。`InspectorPanelActions` 需要主动配对、导出回调与应用无关的前后台生命周期动作，通知合并以限制渲染开销。

`TrustedSender` 使用 RCP 默认系统证书链、域名与有效期校验，不接受电脑默认自签证书。应提供系统信任 HTTPS。此端只校验配对指纹格式，并不实施叶证书固定，不能声称与 iOS/Android 相同或引入信任绕过。

自定义扫码器必须停止释放后才交付有界 JSON，后台、关闭与换号时取消，并同步暴露前台状态。清理失败会阻止新采集，直到进程重启。离线 `.ets` 逻辑与宿主编译不等于 Scan Kit 真机、摄像头释放或可信 TLS 验收。
