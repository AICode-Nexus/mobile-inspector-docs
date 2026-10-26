---
title: "Capture model"
description: "Mobile Inspector development documentation · Capture model"
---

# Capture model

Mobile Inspector observes the application's existing transport. It must not become a replacement transport, a second stream reader or a business retry controller.

## Explicit lifecycle

Create the SDK stopped. Configure pairing while stopped, confirm the nonsecret destination, then start recording on a separate user action. Starting creates a new recording generation. Stop retains bounded local records but invalidates old handles and queued transfer. Clear stops recording, invalidates callbacks, purges memory and attempts the paired remote clear. Disconnect removes diagnostic delivery configuration.

On account/environment change, clear and disconnect before new work. Late callbacks from the old generation must not write into the new account. Closing a panel does not itself stop recording.

## Read once, observe once

Adapters tee bytes as the business consumer reads them. SSE is parsed incrementally; incomplete tails are discarded. HTTP status, transport completion, cancellation and business success are different facts. Binary/file/audio payloads remain summaries. Native logs are explicit SDK calls; JavaScript can wrap console while preserving original output.

## Bounded evidence

Defaults retain 100 requests, 20,000 events and 8 MiB serialized records. Per-request bodies are bounded to 1 MiB, SSE frames to 128 KiB. Batch/queue limits prevent unbounded background work. Explicit limit/gap markers mean a trace may be partial. Pairing never enables capture or diagnosis by itself.

Read [privacy](privacy.md) before enabling test bodies or exporting logs.
