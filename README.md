# SHAR Production Open Tools Hub

A deterministic bilingual static directory generated from `../asset-registry/data/registry.json` and `../tool-factory/package.json`.

Publisher: **[SHAR Production](https://sharprod.com/)**.

```sh
npm run check
```

The output is written to `dist/` with `/en/` and `/ru/` routes. It includes search and filters, evidence citations, canonical/hreflang metadata, robots, sitemap and truthful item-specific structured data. It contains no analytics, tracking scripts, submission forms or inferred performance claims.

Primary public deployment: **https://shar-production-open-tools.pages.dev/en/** on Cloudflare Pages. The Hugging Face Static Space remains a verified mirror. Local builds use the planned base by default; deployments inject their exact HTTPS canonical through `SHAR_TOOLS_HUB_BASE`.

MIT licensed. Registry content remains governed by its source and the licenses displayed per asset.
