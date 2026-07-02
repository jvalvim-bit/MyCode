# MyCode Architecture

MyCode is now organized as a static ES Module frontend instead of a single HTML file.

## Runtime

`src/main.js` is intentionally small and loads `src/runtime/appRuntime.js`.

The runtime file contains the browser application shell: routing, rendering, lesson execution, Ranked mode, achievements, certificates, editor behavior, and localStorage integration.

## Content

The curriculum is no longer embedded inside the runtime. It is split by language and by module:

- `src/content/modules/pt/`
- `src/content/modules/en/`
- `src/content/tasks.pt.js`
- `src/content/tasks.en.js`

Extra questions are split by topic:

- `src/content/extra/pt/`
- `src/content/extra/en/`

This allows curriculum updates without touching the runtime.

## Styles

CSS is split into ordered partials and loaded by `styles/main.css`.

The order is important because the original UI evolved through several layered refinements. The partials preserve cascade order while making the project navigable.

## Assets

Large base64 assets were extracted into real files under `assets/`. This keeps HTML/JS smaller and makes GitHub diffs more readable.

## Storage

The app uses browser `localStorage` for:

- lesson progress;
- XP and streaks;
- achievements;
- equipped achievements;
- Ranked attempts;
- Ranked RP and history;
- language preference;
- admin state.

## Backend Readiness

Ranked mode is currently local. A future backend could replace localStorage persistence with API endpoints for:

- authenticated users;
- global rankings;
- server-side challenge validation;
- real anti-cheat;
- cross-device sync.
