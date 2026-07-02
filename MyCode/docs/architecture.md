# MyCode Architecture

MyCode is a static front-end app built with plain HTML, CSS, and JavaScript.

## Entry Point

`index.html` contains the semantic structure of the application and loads:

- `styles/main.css`
- `src/main.js`

## Styling

`styles/main.css` contains the complete visual system:

- Landing page layout.
- Task dashboard.
- Learning path.
- Lesson overlay.
- Ranked Arena UI.
- Code editor styling.
- Achievement gallery.
- Toast notifications.
- Certificate views.
- Responsive behavior.

## JavaScript

`src/main.js` contains the application engine:

- Curriculum data.
- Language switching.
- Task rendering.
- Lesson rendering.
- Project editor behavior.
- Code editor behavior.
- Progress tracking.
- Achievements.
- Equipped achievements.
- Ranked Arena.
- Local ranking state.
- Certificates.
- `localStorage` persistence.

## State Model

The current app state is saved locally in the browser. It includes completed tasks, scores, streak, language, selected module, reviews, achievements, and Ranked progress.

## Ranked Mode

The Ranked system is local-only in this version. It simulates competitive gameplay through:

- Daily challenge selection.
- Timer.
- Score formula.
- RP and league progression.
- Rank-up toast.
- Local history.

A future backend implementation should move validation, timestamps, test cases, anti-cheat, and leaderboard logic to the server.

## Achievements

Achievements are defined in JavaScript and evaluated against local state. Students can equip up to 5 achievements. Admin mode unlocks all achievements visually, but the 5-equipped limit remains enforced.

## Future Modularization

The next technical step should be to split `src/main.js` into smaller modules:

- `state.js`
- `storage.js`
- `i18n.js`
- `tasks.pt.js`
- `tasks.en.js`
- `achievements.js`
- `ranked.js`
- `editor.js`
- `certificates.js`
- `render/`

This would make the repository easier to maintain and review.
