---
title: "兼容性"
description: "Mobile Inspector development documentation · 兼容性"
---

# 兼容性

兼容性描述源码要求，不承诺全部操作系统与设备组合。CLI、SDK 与 v1 事件约定应选自同一已审阅源码版本。

<!-- @generated:compatibility -->

<!-- Generated from checked compatibility facts. -->

## 兼容矩阵

| 组件 | 要求 | 状态 |
| --- | --- | --- |
| CLI / viewer / MCP | Node.js 22+; OpenSSL for generated TLS | development |
| JavaScript / H5 | ESM; secure camera context; trusted HTTPS ingestion | source |
| WeChat | host adapter; legal domains; trusted HTTPS | source |
| iOS | iOS 15+; local Swift package | source |
| Android | Kotlin 2.1.20; JVM 17; OkHttp 4.12 | source |
| HarmonyOS | ArkTS; system-trusted HTTPS; API24 host compilation separate | source |
| Codex diagnosis | UNSUPPORTED_SANDBOX | unavailable |
| Responses diagnosis | strict no-tools adapter | source-only; compatibility unaccepted |
| M4 repair | not implemented | unavailable |

<!-- @endgenerated:compatibility -->

## 各端信任策略

H5、微信和 HarmonyOS 的采集传输需要系统信任的 HTTPS，电脑默认自签证书不足以满足。H5 扫码还需要安全摄像头上下文，微信需要平台域名配置。iOS 和 Android 使用独立诊断叶证书固定传输，同时保持域名与有效期校验；这些设置都不改变业务 TLS。

## 验证层级

本地测试、浏览器渲染、原生编译和真机事件到达是不同结果。Android 接入基线为 API 26+，自定义消费者还应提供平台 JSON 运行时。Harmony 离线逻辑测试不证明 ArkTS 编译、摄像头释放或可信网络到达。

采集、查看器及五个只读 MCP 工具已实现，但特定主机互通范围可能小于 SDK 工具覆盖。运行诊断仍未验收：Codex 为 `UNSUPPORTED_SANDBOX`，直接 Responses 适配器暂无已验收的提供方组合。自动修复 M4 未实现。设计自动化前阅读[诊断状态](../reference/diagnosis.md)。
