---
title: "合成诊断实验"
description: "Mobile Inspector development documentation · 合成诊断实验"
---

# 合成诊断实验

这是仅源码可运行的事件编排合成实验，不是线上模型配置指南。当前自动诊断为 false，Codex 门禁为 `UNSUPPORTED_SANDBOX`，提供方兼容性未验收，M4 修复未实现。

## 只运行假 Runner

在已授权完整源码 checkout 安装锁定依赖后：

```sh
npm run verify:diagnosis
npm run verify:responses
```

默认执行拥有的临时合成夹具与假 Runner/提供方，不调用真实模型，不读取业务账号或修改全局认证。安装后的运行 tarball 不包含这些源码工具。

## 检查什么

核对观察与任务状态分离，取消使旧回调失效，上限与静默窗口拒绝重复工作，CLI、查看器和 MCP 共用安全失败权威。诊断结果只是推测，不是编辑许可；失败详情使用固定 stage/code，排除提供方原文。

本地测试能验证严格 JSON、范围引用、畸形结果拒绝、一次 POST 上限与自有清理，但不能认证提供方、主机工具清单、源码原因、设备行为或线上部署。

## 到边界停止

没有单独明确授权不能给这些命令增加真实策略参数。真实请求可能计费，兼容失败不授权重试、放宽协议、回退提供方或修改认证，也不能削弱 Codex 门禁来制造可运行结果。无需模型的检查可使用[事件](../reference/incidents.md)与[五个 MCP 工具](../reference/mcp.md)。
