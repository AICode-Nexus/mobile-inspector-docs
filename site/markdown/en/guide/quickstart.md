---
title: "Quickstart"
description: "Mobile Inspector development documentation · Quickstart"
---

# Quickstart

A useful first run takes no phone, account or model. It starts one local viewer and lets you inspect deliberately synthetic traffic.

## Before you start

The product source is private. Obtain authorized repository access and select a reviewed ref first; this public documentation does not grant access. There is no public stable npm package, binary or release tag in this edition. You need Node.js 22+, Git and OpenSSL for generated local TLS.

## Start from the checkout

```sh
npm ci --ignore-scripts
node bin/mobile-inspector.mjs --version
node bin/mobile-inspector.mjs doctor --json
node bin/mobile-inspector.mjs start
```

Open the viewer URL printed by the process. Choose the labelled synthetic example. HTTP status, SSE frames and related logs should appear in the same session. Nothing here contacts a sample business endpoint or enables diagnosis.

## Check the result

Confirm the synthetic label, request timeline and log level. A visible page proves rendering; a received synthetic event proves only the local example. Neither proves phone pairing, business success or model interoperability. Stop your foreground process with Ctrl+C when finished.

Next, follow [the first-capture tutorial](../tutorials/first-capture.md) for project-scoped CLI evidence, or [LAN pairing](connection-lan.md) for an already integrated internal app.
