# SHAR Production Open Tools Hub

A deterministic bilingual static directory generated from `../asset-registry/data/registry.json` and `../tool-factory/package.json`.

Publisher: **[SHAR Production](https://sharprod.com/)**.

```sh
npm run check
```

The output is written to `dist/` with `/en/` and `/ru/` routes. It includes search and filters, evidence citations, canonical/hreflang metadata, robots, sitemap and truthful item-specific structured data. It contains no analytics, tracking scripts, submission forms or inferred performance claims.

The default planned canonical base is `https://sharprod.com/open-tools`. Override it only at build time with `SHAR_TOOLS_HUB_BASE` after a public destination is approved. A local build is not a deployment and is not marked as one.

MIT licensed. Registry content remains governed by its source and the licenses displayed per asset.
