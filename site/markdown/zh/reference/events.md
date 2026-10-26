---
title: "事件协议"
description: "Mobile Inspector development documentation · 事件协议"
---

# 事件协议

v1 JSONL 每行一个 JSON 事件，可带末尾换行。这是诊断证据格式，本站不提供采集接收服务。

| 字段 | 含义 |
| --- | --- |
| `v` | 协议版本，当前为 1 |
| `sessionId`、`deviceId` | 采集与设备身份，不授予文件系统权限 |
| `platform` | 仅限 `ios`、`android`、`harmony`、`h5`、`wechat`、`node` |
| `app`、`build`、`environment` | 描述性来源元数据 |
| `requestId` | 可选关联请求标识 |
| `sequence`、`timeMs` | 会话顺序与时间戳 |
| `kind`、`data` | 事件类型与有界脱敏内容 |

## 阅读时间线

请求元数据建立请求，随后可以出现响应 Header、状态、正文观察、增量 SSE 帧和主动应用日志。complete、cancel、error 描述传输状态，HTTP 200 本身不证明业务成功。未完成 SSE 尾部丢弃，帧、正文和队列上限会产生显式缺口。

应用标签、路径或文本不能授权项目或选择仓库，只有可信宿主注册能授予能力。日志和正文都按不可信内容处理。

## 合成示例

<a href="/mobile-inspector-docs/samples/synthetic-capture.jsonl" download="synthetic-capture.jsonl">下载固定合成 JSONL</a>。协议平台值为 `node`；应用、构建、环境与载荷标签明确标为合成数据。文件使用虚构标识、保留示例域名，包含 HTTP 503 与关联日志，无凭据或配对数据，也不是真机采集。[第一次采集](../tutorials/first-capture.md)说明如何与宿主创建的合成会话对照。导出归用户所有，删除查看器内存不能收回副本。
