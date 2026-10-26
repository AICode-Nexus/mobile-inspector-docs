---
layout: home
title: "移动端证据，清晰可见"
hero:
  name: Mobile Inspector
  text: "<span class='hero-phrase'>移动端证据，</span><wbr><span class='hero-phrase'>清晰可见。</span>"
  tagline: "在内部诊断构建中，主动观察网络、SSE 与日志。一个本地查看器，一条可信证据链。"
  image:
    src: /assets/inspector-synthetic.svg
    alt: "合成示例界面：HTTP 状态、SSE 和日志，非真实设备数据"
  actions:
    - theme: brand
      text: "快速开始"
      link: /zh/guide/quickstart
    - theme: alt
      text: "观看 75 秒使用指南"
      link: /zh/tutorials/first-capture#animated-guide
---

<div class="status-strip"><span class="status-dot"></span><span class="status-copy">0.1.0 DEVELOPMENT · 私有源码 · 公开文档 · 合成示例</span></div>

<div class="home-start">

<div>

## 从本地开始观察

源码仍为私有，请先获得仓库访问权限并选择已审阅版本。本站不提供公开稳定产品安装包。取得完整 checkout 后，启动你的本地查看器。

</div>

<div>

```sh
npm ci --ignore-scripts
node bin/mobile-inspector.mjs start
```

打开进程打印的地址，选择明确标记的合成示例；这不会连接真实设备或模型。

</div>

</div>

<div class="principles">

<section>

### 主动采集

停止状态配置 → 确认目标 → 独立开始记录 → 核对实际到达。账号或环境变化使旧代次失效。

</section>

<section>

### 有界证据

内存预算、增量 SSE 与明确缺口标记。HTTP 状态、传输结束和业务结果分别观察。

</section>

<section>

### 工具协作

查看器、CLI 与五个只读 MCP 工具共用项目范围证据。自动诊断未验收，M4 自动修复未实现。

</section>

</div>

## 选择你的接入点

<nav class="integration-links" aria-label="SDK 接入">

[JavaScript](./sdk/javascript.md)

[H5](./sdk/h5.md)

[WeChat](./sdk/wechat.md)

[iOS](./sdk/ios.md)

[Android](./sdk/android.md)

[HarmonyOS](./sdk/harmonyos.md)

</nav>

了解[采集模型](./guide/capture-model.md)，继续阅读 [CLI](./reference/cli.md) · [Codex / MCP](./integrations/codex.md) · [LAN / QR](./guide/connection-lan.md) · [USB](./guide/connection-usb.md) · [隐私](./guide/privacy.md)
