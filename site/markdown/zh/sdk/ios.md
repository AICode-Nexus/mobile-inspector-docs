---
title: "iOS / Swift"
description: "Mobile Inspector development documentation · iOS / Swift"
---

# iOS / Swift

在内部 iOS 15+ target 引入本地 `packages/swift` 包，选择 `MobileInspector`，可选 `MobileInspectorUI`。仓库根不是 SwiftPM Git 安装入口。

```swift
import MobileInspector
let inspector = Inspector(app: "Synthetic iOS", build: "internal", environment: "staging")
// 显式开始记录，默认不含正文：
inspector.start()
let request = inspector.beginRequest(method: "GET", url: "https://example.test/catalog")
request?.response(status: 200, headers: ["Content-Type": "application/json"])
request?.finish()
let logger = inspector.logger(scope: "catalog")
logger.log(level: "info", message: "Synthetic catalog loaded")
inspector.stop()
```

用 `request?.chunk(bytes)` 观察已有响应字节，不能预读流。异步工作保留 scoped logger，防止旧代次写入新记录；SDK 不全局拦截 print 或 OSLog。

`InspectorPanel(inspector:)` 提供主动记录、配对与导出；内部宿主可在遵守安全区的根 overlay 放置一次 `InspectorFloatingLauncher(inspector:)`。关闭 UI 不停止采集。准确声明内部本地网络与摄像头用途，摄像头仅在扫一扫时申请。

`connect(pairJSON:)` 使用独立临时诊断会话，校验叶证书 DER SHA-256、域名与有效期，不改变业务 URLSession 信任或安装 CA。换号及环境变化时清除；自定义确认使用 `lifecycleRevision` 和 `connect(pairJSON:expectedRevision:)` 防竞态。编译和模拟器不能证明真机权限、扫码器释放或事件到达。
