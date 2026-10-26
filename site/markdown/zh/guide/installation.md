---
title: "安装"
description: "Mobile Inspector development documentation · 安装"
---

# 安装

## 访问权限与分发

源码仓库是私有仓库。克隆之前，请确认当前 Git 身份具有访问权限；能阅读本站不代表有源码权限。这是 0.1.0 开发源码，不是公开稳定安装版。

```sh
git clone https://github.com/AICode-Nexus/mobile-inspector.git
cd mobile-inspector
npm ci --ignore-scripts
node bin/mobile-inspector.mjs --version
node bin/mobile-inspector.mjs doctor --json
```

安装前选择经过审阅的源码版本。要求不可变发布版本的流程不能静默改用移动分支。本站不提供稳定产品制品下载。

<!-- @generated:install -->

<!-- Generated from installation metadata; safe fields only. -->

## 安装约定

| 属性 | 值 |
| --- | --- |
| Version | 0.1.0 (development) |
| Node.js | 22+ |
| 分发 | 私有源码或已检查的本地候选；暂无公开稳定包 |
| automaticDiagnosis | false |
| automaticRepair | false |

<!-- @endgenerated:install -->

## 本地候选与卸载

已检查的本地 tarball 可以安装到独立、归自己所有的目录。请按交付记录核对版本与校验和。运行包包含 CLI 与服务资源，不含源码测试、工具和本站；`npm test`、`npm run verify:install` 仅在完整 checkout 执行。

用 `--home PATH` 指定新的或工具拥有的状态目录。移除前停止前台进程，仅删除自己的安装目录，主动导出的文件另行保留。移动 CLI 位置前先移除未改动的[项目级 Codex 配置](../integrations/codex.md)，再按新路径配置。

接入原生 SDK 前阅读[兼容性](compatibility.md)。Swift 使用本地 `packages/swift` 包，不能把仓库根地址当作 SwiftPM Git 依赖。
