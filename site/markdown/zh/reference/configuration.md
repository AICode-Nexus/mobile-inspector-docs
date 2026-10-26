---
title: "配置与状态"
description: "Mobile Inspector development documentation · 配置与状态"
---

# 配置与状态

## 托管 home

优先级为 `--home PATH`、`MOBILE_INSPECTOR_HOME`，最后为操作系统用户状态目录。所选目录应为新建、空目录或工具拥有。外来、越界、符号链接或不安全状态会拒绝，不静默迁移旧数据。持久状态包括 TLS 身份与可信项目元数据；运行能力、正文授权与采集属于本轮，采集只在内存。

能力值不能进入命令、URL、提示词或导出。查看器 Cookie 与 SDK 配对 token 不能授权机器 API。`instance status --json` 核验认证 owner，旧文件本身不能授权终止进程。

## 可信项目配置

`project add --root PATH --name NAME` 选择可信 Git 根；构建映射需要已有 commit 和内部源码根。注册目录或 commit 不可用时，owner 的 project list 提供可用性诊断，应主动移除或恢复资源后重启验证，不能离线改 registry。

最小诊断策略明确且不启动执行：

```json
{"schemaVersion":1,"automation":{"mode":"off"}}
```

用 `project diagnosis-config --project ID --file PATH` 保存常规、非符号链接 UTF-8 JSON，最大 16 KiB。保存不会打开租约或调用模型，未知字段拒绝。提供方描述只存主动选择的 HTTPS 地址、模型和环境变量名，不存凭据值。运行诊断仍不可用，见[生命周期](diagnosis.md)。
