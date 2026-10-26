---
title: "Android / Kotlin"
description: "Mobile Inspector development documentation · Android / Kotlin"
---

# Android / Kotlin

仅在内部构建 variant 引入 Kotlin 源码包。现有基线为 Kotlin 2.1.20、JVM 17、OkHttp 4.12 与 Android API 26+。Android 提供 `org.json`，独立 JVM 消费者需自行提供。

```kotlin
val inspector = Inspector("Synthetic Android", "internal", "staging")
val client = existingClient.newBuilder()
    .addInterceptor(InspectorInterceptor(inspector))
    .build()
// 停止状态完成配对，再通过独立动作开始：
inspector.start(includeBodies = false)
inspector.log("info", "Synthetic catalog loaded", "catalog")
// 账号或环境边界：
inspector.clear()
```

保持原业务客户端信任设置。拦截器只观察调用者已经执行的正文写入和响应读取，不复制 duplex、multipart、文件、二进制或音频。未读完便关闭响应属于取消，不是成功完成；socket 仅记录方向与大小摘要。

诊断传输使用独立 OkHttp 客户端，校验叶证书固定值及常规域名有效期。QR 宿主自备可控扫描器，在 `PairingScan.receive` 前停止并释放，再通过停止状态的 `configurePairing(pairJson, expectedRevision)` 确认。旧 active `connect` 可能发送有界积压，行为不同。

`exportJSONL(false)` 删除 HTTP/SSE 正文，但不能去掉日志中的全部个人信息，需要复核提示。利用生命周期失效回调保护后台与换号竞态。正式图中排除摄像头声明、SDK 和 UI；JVM 模拟不能证明真机摄像头、权限或 TLS 到达。
