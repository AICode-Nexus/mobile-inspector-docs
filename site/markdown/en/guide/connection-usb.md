---
title: "iPhone USB"
description: "Mobile Inspector development documentation · iPhone USB"
---

# iPhone USB

USB is the existing wired iPhone flow on a Mac with Xcode/CoreDevice support. It does not require shared Wi-Fi. It is not a generic Android, HarmonyOS or browser USB transport.

## Prerequisites

Use a physical connected iPhone that trusts the Mac, a working data cable, Xcode command-line tools and OpenSSL. The internal app must already integrate the native SDK and its diagnostic local-network usage declaration. Device signing/install and actual permission prompts remain the app maintainer's responsibility.

## Pair explicitly

In the viewer choose **USB**, select the connected phone, then generate pairing. The server revalidates the physical wired binding and resolves its route; it does not accept an arbitrary client-supplied USB endpoint. USB has no LAN QR.

Choose **Copy to phone**, paste into the diagnostic panel and connect. Copy uses the selected device's Xcode pasteboard command only after that click; it does not read the phone clipboard or synchronize automatically. Keep recording stopped during configuration, then start it separately.

## Verify receipt

Trigger one harmless internal test action. Confirm its actual event reaches the viewer and matches the intended session. Device discovery, a successful clipboard action or a configured panel alone cannot establish transport receipt.

If the wire disconnects, stop and reselect the valid device; do not infer identity from a stale selector. Diagnose trust/cable/Xcode prerequisites before changing network settings. [LAN/manual pairing](connection-lan.md) remains a separate fallback.
