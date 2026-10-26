---
title: "诊断生命周期"
description: "Mobile Inspector development documentation · 诊断生命周期"
---

# 诊断生命周期

## 当前可用性

`automaticDiagnosis` 为 false。Codex 适配器在 Git 和模型工作之前返回 `UNSUPPORTED_SANDBOX`，原因是有效无工具权限尚未认证。直接 Responses 适配器通过源码测试，但提供方兼容性未验收；配置不能豁免。自动修复 M4 未实现。

采集、事件浏览和只读 MCP 独立可用。普通启动、配对与记录不发模型请求。真实提供方尝试需要主动选择可信策略、owner 进程凭据及单独授权，失败不代表可以重试。

## 观察与假设分开

事件保存事实，诊断是推测。事件状态有 open、diagnosing、diagnosed、needs-input 与 cancelled；任务状态为 queued、running、result、failed、cancelled。任务失败不创建应用缺陷，修复建议不是编辑许可或解决证明。

## 有界编排

每项目一个前台租约，全局最多四个。每项目一个执行任务、最多三个待处理，全局最多十二个待处理。五分钟期限覆盖准备与 runner；取消或超时发布终态，但在确认终止前保留容量。不定时重试，重复与静默窗口限制仍有效。

直接适配器最多一次有界 HTTPS POST，无工具、重定向、重试、回退或源码获取。结构结果校验拒绝虚构证据、路径越界和未知字段。安全失败可显示固定 stage/code/HTTP 状态，不显示提供方原文和正文。本地假提供方通过只证明本地分类。可从不调用模型的[合成实验](../tutorials/diagnosis.md)开始。
