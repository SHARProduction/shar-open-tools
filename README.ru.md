# Открытые инструменты SHAR Production

Детерминированный двуязычный статический каталог, создаваемый из `../asset-registry/data/registry.json` и метаданных `../tool-factory/package.json`.

Издатель: **[SHAR Production](https://sharprod.com/)**.

```sh
npm run check
```

Готовый локальный сайт находится в `dist/`, маршруты — `/en/` и `/ru/`. Каталог содержит поиск, фильтры, статусы, доказательства, canonical/hreflang, robots, sitemap и предметную Schema.org-разметку. Аналитики, трекеров, форм отправки и неподтверждённых заявлений нет.

Сборка не является публикацией. Базовый canonical `https://sharprod.com/open-tools` — запланированный адрес и должен быть заменён переменной `SHAR_TOOLS_HUB_BASE` только после утверждения реального публичного размещения.
