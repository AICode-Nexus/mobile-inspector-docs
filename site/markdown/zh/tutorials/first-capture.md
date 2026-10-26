---
title: "第一次采集"
description: "Mobile Inspector development documentation · 第一次采集"
---

# 第一次采集

这个离线优先实验创建宿主标记的合成记录，不访问虚构业务 URL，不需要手机或模型。先取得[授权源码](../guide/installation.md)。

## 1. 启动一个 owner

```sh
node bin/mobile-inspector.mjs start
```

保持前台运行，打开打印的查看器地址。在同一 checkout 的另一终端注册可信本地 Git 项目，把 PATH 替换为其绝对目录。

## 2. 创建合成证据

```sh
node bin/mobile-inspector.mjs project add --root PATH --name SyntheticProject
node bin/mobile-inspector.mjs project list
node bin/mobile-inspector.mjs demo --project PROJECT_ID
node bin/mobile-inspector.mjs query list_sessions --project PROJECT_ID
```

PROJECT_ID 使用返回标识，保留列表返回的会话 ID 与代次，再原样查询：

```sh
node bin/mobile-inspector.mjs query get_request_trace --project PROJECT_ID --session SESSION_ID --generation GENERATION
node bin/mobile-inspector.mjs query get_related_logs --project PROJECT_ID --session SESSION_ID --generation GENERATION
```

## 3. 阅读证据

查看器中找到合成 HTTP 503、三个 SSE 帧与相关日志。核对顺序、完整性与缺口，不能把 503 当作已确认的客户端缺陷。<a href="/mobile-inspector-docs/samples/synthetic-capture.jsonl" download="synthetic-capture.jsonl">固定合成样例</a>仅展示事件封装，不是动态 demo 的完整输出。

## 4. 主动结束

用 Ctrl+C 仅停止自己的前台 owner。内存采集消失，私有注册与 TLS 状态保留。不要删除不属于自己的项目。合成会话只证明本地证据流，不证明真机网络、认证 Live 或模型诊断。
