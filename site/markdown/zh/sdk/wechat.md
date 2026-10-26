---
title: "微信小程序"
description: "Mobile Inspector development documentation · 微信小程序"
---

# 微信小程序

在显式内部小程序构建中使用 host 适配器，传入真实 `wx` 或兼容的 Taro 对象；SDK 不引入浏览器代理。

```js
import { createInspector } from '@mobile-inspector/javascript';
import { installWechatCapture, wechatSender } from '@mobile-inspector/javascript/wechat';
const inspector = createInspector({ app: 'Synthetic mini program', platform: 'wechat', environment: 'staging' });
// 必须先绑定，再包装，避免诊断发送采集自身。
const rawHost = { request: wx.request.bind(wx) };
const send = wechatSender(rawHost);
const uninstall = installWechatCapture(inspector, wx);
// 停止状态下，用户确认手工配对后：
// inspector.connect(pairJson, send);
// 独立开始记录动作：
// inspector.start({ includeBodies: false });
```

适配器包装宿主提供的 request、upload、download 与 socket 生命周期，上传下载字节保持摘要；chunk 回调只观察 SSE，不改变原回调或二次读取。应用可通过 `inspector.log` 主动记录日志。

小程序平台合法域名需配置系统信任的 HTTPS 采集地址。原生证书固定不能替代微信信任。自定义扫码器应仅内部可用、可停止且手动启动，在确认有界配对 JSON 前停止摄像头。

换号或切换环境调用 `clear()` 与 `disconnect()`，卸载时再执行 `uninstall()`。不能把旧的 DevTools 专用 Logger 注入真机。真实宿主回调和设备到达必须独立验证，不能用 JavaScript 测试替代。
