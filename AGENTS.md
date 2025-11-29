# Repository Guidelines

## Mission & Focus
- Zyvrix builds automation-first systems—n8n workflows, AI agents, secure APIs, and custom apps that erase repetitive work.
- Explain how each change enhances integrations, data flow, or autonomous decisions.
- Bias toward scalable building blocks so clients can extend orchestration flows with minimal rework.

- Root HTML entry points (`index.html`, `pricing.html`, etc.) load shared runtime helpers from `assets/js/`. Add pages here unless they require API endpoints.
- `assets/css/` carries modular partials (`base/` for tokens, resets, navigation, layout; `components/` for page-level styles). Import additions via `assets/css/styles.css`.
- `assets/js/data/` stores text, catalogues, and payloads that hydrate into `window.DATA`. Export descriptive objects (e.g., `site/faqs.js`).
- `public_html/api/` holds the PHP backend; `database/init.sql` tracks schema migrations. Append new SQL files instead of editing history.

## Build, Test, and Development Commands
- `composer install --working-dir public_html/api` — install PHP dependencies for the auth API.
- `php -S localhost:8080 -t public_html/api/public` — serve the API locally with the bundled rewrites.
- `npx serve .` (or `python -m http.server 4173`) — preview the static site so relative assets resolve.
- `mysql < database/init.sql` — seed a local MySQL instance before hitting auth endpoints.

## Coding Style & Naming Conventions
- Use 2-space indentation for HTML, CSS, and JavaScript. Favor single quotes in modules and double quotes in markup attributes.
- Keep data exports in `camelCase` and match filenames to their primary export (e.g., `pricingGroups.js`).
- Follow BEM-style CSS selectors (`section__element--modifier`) and lean on variables from `assets/css/base/tokens.css`.

## Testing Guidelines
- Manually reload each affected HTML page after edits and inspect `window.DATA` in DevTools to confirm renderer inputs.
- Exercise API endpoints with `curl` once the PHP server is live (`curl http://localhost:8080/api/auth/health`). Keep fixtures in sync with backend responses.
- Smoke-test forms (login, checkout, quote) in both themes.

## Commit & Pull Request Guidelines
- Write imperative, present-tense commits under 72 characters (e.g., `fix mode toggle issue`). Squash WIP history before submitting.
- Reference related issues, summarise touched pages/components, and attach screenshots for visual changes.
- Document validation steps (pages loaded, API calls made) plus any configuration changes such as new env vars or SQL scripts.

## Security & Configuration Tips
- Never commit populated `.env` files. Copy `public_html/api/.env.sample`, fill secrets locally, and rely on deployment key stores.
- Keep any debug payloads anonymized and excluded via `.gitignore`; treat `database/init.sql` as the sole source for shareable seed data.
