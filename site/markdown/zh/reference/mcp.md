---
title: "MCP 工具"
description: "Mobile Inspector development documentation · MCP 工具"
---

# MCP 工具

五个只读 stdio 工具共用现有项目范围 collector。没有修改源码、执行 Shell、另选根目录、开启采集或修复客户端的工具。

| 工具 | 读取范围 |
| --- | --- |
| `list_sessions` | 绑定项目中的可用会话 |
| `get_request_trace` | 一个会话代次，可选单个请求 |
| `get_related_logs` | 会话、请求或事件日志范围 |
| `list_incidents` | 有界候选观察 |
| `get_incident` | 保留的单个事件与共享诊断状态 |

## 安全分页

先列出会话，原样保留 `sessionId` 和 `instanceGeneration`。可选请求选择器收窄轨迹与日志。默认 50、最多 200 条，字节上限可能使实际条数更少。`nextCursor` 必须配合同一选择器、代次、范围和 limit，直到 null。游标绑定项目、记录、修订与初始高水位，过期、陈旧或非法时拒绝。

结果包含 schemaVersion、项目、代次、修订、items、nextCursor、complete 和 gaps。`complete: false` 不能当作完整轨迹。清除、撤销与到期会失效已有读取。默认只读摘要，正文每次读取都需当前会话授权；认证正文、凭据、二进制与音频仍排除。

协议往返、安装包和认证主机互通是不同证据层级，新工具不自动继承旧主机验收范围。接入见 [Codex](../integrations/codex.md)，观察语义见[事件](incidents.md)。
