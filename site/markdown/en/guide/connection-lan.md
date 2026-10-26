---
title: "LAN & QR pairing"
description: "Mobile Inspector development documentation · LAN & QR pairing"
---

# LAN & QR pairing

## Prepare a route

Start the local viewer and open **Connect device**. Choose a registered project or the explicit unassigned local-only option. Select the computer's LAN IPv4 address deliberately when multiple adapters exist. A loopback address cannot serve a phone QR. Check same-LAN routing and firewall rules.

## Scan, confirm, record

Click **Generate connection QR** to open the selected listener. The locally generated QR contains a 30-minute upload capability. Keep it off screenshots, logs and prompts.

In the internal diagnostic app, choose **Scan**. Camera permission starts only here. The camera stops after recognition, before validation and confirmation. Check endpoint, expiry and truncated fingerprint; choose **Confirm configuration**. “Configured; connection verified when sending” is configuration status, not receipt proof. Start recording separately and verify a received event in the viewer.

Manual pairing JSON remains available when scanning is denied or unavailable. Background, cancel, panel disposal and account/environment changes invalidate pending scans. Hosts must clear/disconnect on account changes.

## Trust and revocation

H5 scanning needs a secure context. H5/WeChat/HarmonyOS ingestion needs system-trusted HTTPS; WeChat domain configuration still applies. Do not install a CA or weaken business TLS as a workaround. Native diagnostic pinning is a separate policy.

Hiding a QR or closing a dialog does not revoke its capability. Use **Revoke**, clear, or expiry. Changing address/project/transport removes displayed pairing data. [USB](connection-usb.md) remains available for the supported wired iPhone flow.
