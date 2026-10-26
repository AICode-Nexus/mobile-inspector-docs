---
title: "Compatibility"
description: "Mobile Inspector development documentation · Compatibility"
---

# Compatibility

Compatibility describes source requirements, not a promise of every operating-system/device combination. Match the CLI, SDK and v1 event contract from one reviewed source selection.

<!-- @generated:compatibility -->

<!-- Generated from checked compatibility facts. -->

## Compatibility matrix

| Component | Requirement | Status |
| --- | --- | --- |
| CLI / viewer / MCP | Node.js 22+; OpenSSL for generated TLS | development |
| JavaScript / H5 | ESM; secure camera context; trusted HTTPS ingestion | source |
| WeChat | host adapter; legal domains; trusted HTTPS | source |
| iOS | iOS 15+; local Swift package | source |
| Android | Kotlin 2.1.20; JVM 17; OkHttp 4.12 | source |
| HarmonyOS | ArkTS; system-trusted HTTPS; API24 host compilation separate | source |
| Codex diagnosis | UNSUPPORTED_SANDBOX | unavailable |
| Responses diagnosis | strict no-tools adapter | source-only; compatibility unaccepted |
| M4 repair | not implemented | unavailable |

<!-- @endgenerated:compatibility -->

## Trust differs by platform

H5, WeChat and HarmonyOS require system-trusted HTTPS for ingestion. A self-signed desktop certificate is not enough. H5 scanning also needs a secure camera context; WeChat requires its platform domain configuration. Native iOS and Android have a separate diagnostic leaf-pinning transport that preserves normal hostname and validity checks. None of these settings changes business TLS.

## Verification levels

Local tests, browser rendering, native compilation and physical-device receipt are separate results. The Android integration baseline is API 26+; a custom consumer must also supply its platform JSON runtime. Harmony SDK logic tests run offline and do not prove ArkTS compilation, camera release or trusted network receipt.

Capture/viewer and five read-only MCP tools exist. Exact host interoperability can be narrower than SDK tool coverage. Operational diagnosis remains unaccepted: the Codex gate is `UNSUPPORTED_SANDBOX`, and the direct Responses adapter has no accepted provider profile. Automatic repair (M4) is not implemented. Check [diagnosis status](../reference/diagnosis.md) before designing automation.
