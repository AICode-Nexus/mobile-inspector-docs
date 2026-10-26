---
title: "快速开始"
description: "Mobile Inspector development documentation · 快速开始"
---

# 快速开始

第一次运行无需手机、账号或模型。先启动一个本地查看器，检查明确标记的合成流量。

## 开始之前

产品源码仍为私有。请先获得仓库访问权限并选择已审阅的版本；公开文档不会授予访问权限。本版没有公开稳定 npm 包、二进制或发布标签。需要 Node.js 22+、Git，以及用于生成本地 TLS 身份的 OpenSSL。

## 从源码启动

```sh
npm ci --ignore-scripts
node bin/mobile-inspector.mjs --version
node bin/mobile-inspector.mjs doctor --json
node bin/mobile-inspector.mjs start
```

打开进程打印的查看器地址，选择带有标记的合成示例。同一会话中应出现 HTTP 状态、SSE 帧与相关日志。这些步骤不会连接示例业务地址，也不会启用诊断。

## 核对结果

确认合成标记、请求时间线与日志级别。页面可见证明渲染，合成事件到达只证明本地示例；它们不能证明手机连接、业务成功或模型互通。结束后用 Ctrl+C 停止自己的前台进程。

接着阅读[第一次采集](../tutorials/first-capture.md)获取项目级 CLI 证据，或为已接入的内部应用进行[局域网配对](connection-lan.md)。
