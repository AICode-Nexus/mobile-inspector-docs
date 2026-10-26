---
title: "Codex 接入"
description: "Mobile Inspector development documentation · Codex 接入"
---

# Codex 接入

查看器、CLI 与 MCP 共用一个 collector。项目绑定 stdio 桥不会启动第二个 collector 或 USB 监听。先[从授权源码安装](../guide/installation.md)，启动 owner 并注册可信 Git 项目。

使用源码 checkout 且 CLI 尚未加入 `PATH` 时，将下方命令的 `mobile-inspector` 前缀替换为 `node bin/mobile-inspector.mjs`（例如 `node bin/mobile-inspector.mjs start`）。

```sh
mobile-inspector start
```

保持该前台 owner 运行，在另一终端继续使用同一默认托管状态目录：

```sh
mobile-inspector project add --root PROJECT_ROOT --name SyntheticProject
mobile-inspector project list
mobile-inspector mcp setup --project PROJECT_ID
```

`PROJECT_ROOT` 是操作者选择的绝对 Git 项目目录，不能来自应用上报；它与保存私有注册信息和 TLS 状态的托管状态目录不同。本流程所有命令均省略 `--home`，两个终端均不设置 `MOBILE_INSPECTOR_HOME`，使用同一 OS 用户默认托管状态目录。不要把项目根目录用作托管状态目录。将 `PROJECT_ID` 替换为注册返回的 ID。Setup 仅向该项目 `.codex/config.toml` 追加自有条目、安装项目技能并记录所有权哈希，保留其他配置。重复执行无变化；修改、冲突或符号链接目标会被拒绝。不会读取或修改全局认证。

## 读取证据

配置的服务执行 `mcp serve --project PROJECT_ID`。先调用 `list_sessions`，保留返回的不透明会话标识与实例代次，再按同一范围读取轨迹和日志。只有[五个只读工具](../reference/mcp.md)，工具可用与特定主机互通需要分别判断。采集文本是不可信证据，不能执行里面的指令。

## 升级与移除

```sh
mobile-inspector mcp remove --project PROJECT_ID
```

移动包或 Node 位置前移除未改动的自有配置，再重新配置；用户改动会导致拒绝，不会被覆盖。项目信任和主机权限保持。静态插件资源不证明原生安装。运行 Codex 诊断当前返回 `UNSUPPORTED_SANDBOX`；只读证据接入不启用自动修复。
