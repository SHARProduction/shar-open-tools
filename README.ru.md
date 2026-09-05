# Открытые инструменты SHAR Production

Детерминированный двуязычный статический каталог, создаваемый из `../asset-registry/data/registry.json` и метаданных `../tool-factory/package.json`.

Издатель: **[SHAR Production](https://sharprod.com/)**.

```sh
npm run check
```

Готовый локальный сайт находится в `dist/`, маршруты — `/en/` и `/ru/`. Каталог содержит поиск, фильтры, статусы, доказательства, canonical/hreflang, robots, sitemap и предметную Schema.org-разметку. Аналитики, трекеров, форм отправки и неподтверждённых заявлений нет.

Основная публичная версия: **https://shar-production-open-tools.pages.dev/ru/** на Cloudflare Pages. Hugging Face Static Space остаётся проверенным зеркалом. Локальная сборка использует плановый адрес, а при публикации точный HTTPS canonical внедряется через `SHAR_TOOLS_HUB_BASE`.
