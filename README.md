# Mobile Inspector documentation distribution

[English and 简体中文 documentation](https://aicode-nexus.github.io/mobile-inspector-docs/)

This independent repository contains generated static documentation for Mobile Inspector 0.1.0 development. It contains no product source, collector, real captures, credentials or private source history. Product installation requires authorized private source access; no public stable package, tag or binary is offered here. Automatic diagnosis is unavailable. All examples and the downloadable capture are synthetic. The site never connects to a visitor's collector or a model service.

`site/` is the complete website. `artifact-manifest.json` records the committed source SHA, version, build input/content hashes, release status and the byte size/SHA256 of every other payload file, including this README, legal notices, verifier and workflow. The manifest excludes only itself to avoid a circular hash. Its SHA256 must be retained in the private reviewed publication record and compared before pushing; the manifest is an integrity inventory, not a digital signature. Only a trusted reviewed main commit may deploy.

Run `node verify-artifact.mjs` using Node.js 22+ before publication. It uses built-in modules only, rejects dirty previews by default and requires the exact documented file inventory and hashes. `--preview` is solely for local review and cannot pass the Pages workflow. The repository may add only its own independent `.git/` history, which the verifier excludes; no source `.git` may be copied. No build, npm install, model call or ingestion is performed here.

The SHA-pinned official Pages workflow runs only on this repository's main push or explicit manual dispatch, verifies the entire distribution and uploads **only `site/`**. Configure GitHub Pages with Actions before the initial workflow push. A successful local verification does not prove deployment: inspect the actual Pages run, deployed source revision and URL, compare every live `site/` byte/hash, and check representative EN/ZH pages in a browser. Update repository About links only after that verification.

Updates are explicit exports from a reviewed, clean private source commit with a fresh build. Push only that reviewed payload into this repository's independent main history. Roll back by reverting to an earlier verified complete distribution commit, rerunning the validator and verifying the new Pages deployment and live hashes. Preserve source/build/publication/deployment identities separately. No source visibility change or product release is implied.

`THIRD_PARTY_NOTICES.txt` lists documentation dependencies and their applicable notices, also available within the site. This distribution grants no new license to the private product source.
