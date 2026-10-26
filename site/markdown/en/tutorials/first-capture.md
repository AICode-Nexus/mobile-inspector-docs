---
title: "Your first capture"
description: "Mobile Inspector development documentation · Your first capture"
---

# Your first capture

This offline-first exercise creates a host-labelled synthetic recording. It sends no request to the invented business URLs and needs no phone or model. Obtain [authorized source](../guide/installation.md) first.

## 1. Start one owner

```sh
node bin/mobile-inspector.mjs start
```

Leave that foreground process running. Open its printed viewer URL. In another terminal at the same checkout, register a trusted local Git project; replace `PATH` with its absolute directory.

## 2. Create synthetic evidence

```sh
node bin/mobile-inspector.mjs project add --root PATH --name SyntheticProject
node bin/mobile-inspector.mjs project list
node bin/mobile-inspector.mjs demo --project PROJECT_ID
node bin/mobile-inspector.mjs query list_sessions --project PROJECT_ID
```

Replace PROJECT_ID with the returned ID. Retain the session ID and generation from the list response, then query with those exact values:

```sh
node bin/mobile-inspector.mjs query get_request_trace --project PROJECT_ID --session SESSION_ID --generation GENERATION
node bin/mobile-inspector.mjs query get_related_logs --project PROJECT_ID --session SESSION_ID --generation GENERATION
```

## 3. Read the evidence

Find the synthetic HTTP 503, three SSE frames and related logs in the viewer. Check completeness/gaps and ordering; do not reinterpret 503 as a confirmed client defect. The downloadable <a href="/mobile-inspector-docs/samples/synthetic-capture.jsonl" download="synthetic-capture.jsonl">fixed synthetic sample</a> illustrates the envelope and is not the dynamic demo's full output.

## 4. Finish deliberately

Stop only your foreground owner with Ctrl+C. Captures disappear from memory; private registration/TLS state persists. Remove only a project you own if no longer needed. A working synthetic session proves local evidence flow, not device networking, authenticated Live traffic or model diagnosis.
