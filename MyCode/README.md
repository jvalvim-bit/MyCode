# MyCode

MyCode is an interactive programming-learning platform designed for absolute beginners. It combines a guided curriculum, a visual learning path, code-based exercises, project tasks, achievements, local Ranked challenges, certificates, and a companion mascot called Byte.

The project is currently a **front-end-only application**. It does not require a backend, authentication, database, or external API to run. Progress, equipped achievements, Ranked history, local RP, streaks, and daily state are stored in the browser through `localStorage`.

## Live/Repository Structure

This repository is structured as a professional static frontend project:

```txt
MyCode/
  index.html
  package.json
  README.md
  .gitignore
  docs/
    architecture.md
  src/
    main.js
  styles/
    main.css
```

## Main Features

### Guided Learning Path

The learning experience is organized as a step-by-step path. Each module contains a sequence of tasks that gradually unlock as the student progresses. The path is intentionally visual and game-like, with nodes, task cards, progress states, and a confirmation card before starting a task.

### Beginner-first Curriculum

The current curriculum contains **13 modules and 130 tasks**, reorganized to support students who have never programmed before:

1. First Contact
2. Memory Boxes
3. Data Types
4. Operators and Small Calculations
5. Decision Making
6. Repetitions Without Fear
7. Grouping Data
8. Python from Zero Applied
9. Python: Collections and Flow
10. Python: Functions, Files, and Errors
11. JavaScript from Zero Applied
12. DOM and Interfaces
13. Modern Data and APIs

The early modules focus on output, variables, primitive data types, operators, conditions, loops, and lists before moving into language-specific depth.

### Professional Code Editors

The old textarea-like terminals were replaced with Ranked-style code editors across the app. The editor UI includes:

- Dark developer-style background.
- Line gutter and line numbers.
- Syntax highlighting.
- Active line highlight.
- Tab indentation.
- Automatic closing of parentheses, braces, brackets, quotes, and backticks.
- Auto indentation after opening braces.

### Local Ranked Arena

MyCode includes a local/offline Ranked mode. The Ranked feature is intentionally **not a global competitive system yet**, because this version has no backend or user accounts.

Ranked includes:

- Daily local challenge.
- 180-second timer.
- Code editor with validation tests.
- Visible examples.
- One ranked attempt per day.
- Training mode after the ranked attempt.
- Local score calculation.
- Local RP and league progression.
- Rank-up animation and sound.
- Local history stored in `localStorage`.
- Pixel-art inspired Ranked league badges.

Current leagues:

- Bronze
- Silver
- Gold
- Platinum
- Diamond

### World Ranking Mockup

The dashboard includes a visual “World Ranking” section with a top 10 leaderboard. In the current front-end-only version this is a mock/presentation layer, not a real online ranking. It is intended to represent how the future global leaderboard may look once backend support is added.

### Achievements System

Students can unlock achievements based on their progress, performance, modules, projects, Python milestones, JavaScript milestones, and consistency.

The system supports:

- Unlockable achievements.
- Achievement gallery.
- Locked/unlocked states.
- Admin unlock-all mode.
- Up to 5 equipped achievements.
- Equipped achievements shown in the dashboard sidebar.
- Steam-like achievement unlock toast.
- Unlock sound via Web Audio.
- Module-completion toast.
- Ranked rank-up toast.

Even in Admin mode, the student can only equip 5 achievements at once.

### Byte Assistant

Byte is the MyCode mascot. Byte appears in guided messages, tips, Ranked screens, daily review messages, and learning feedback.

### Certificates

The platform includes certificate generation and certificate cards. Certificates remain part of the front-end app and can be unlocked as the student completes learning milestones.

### Local Storage

MyCode stores user progress locally in the browser. This includes:

- Completed tasks.
- Task scores.
- Streaks.
- Daily completions.
- Review state.
- Weak topics.
- Equipped achievements.
- Achievement toast notifications.
- Ranked history.
- Ranked RP and league state.

Because this is a front-end-only version, clearing browser storage resets progress.

## How to Run Locally

Install dependencies:

```bash
npm install
```

Run a local development server:

```bash
npm run dev
```

Preview a static build-like environment:

```bash
npm run preview
```

Build command:

```bash
npm run build
```

This project uses Vite only as a lightweight static development server and bundling tool. It does not use React, Vue, Angular, or any other UI framework.

## Development Notes

The app is currently implemented in plain HTML, CSS, and JavaScript. The current refactor separates visual styling and JavaScript logic from `index.html`, but the app still intentionally remains framework-free.

The largest logic file is `src/main.js`, which contains curriculum data, rendering functions, state management, Ranked mode, achievements, certificates, and editor behavior.

Future refactors may split `src/main.js` into smaller modules, such as:

```txt
src/
  main.js
  state.js
  storage.js
  router.js
  achievements.js
  ranked.js
  certificates.js
  editor.js
  content/
    tasks.pt.js
    tasks.en.js
    extraQuestions.pt.js
    extraQuestions.en.js
```

## Recommended Future Improvements

- Add a backend for real user accounts.
- Add a real global ranking system.
- Move Ranked validation to a server-side sandbox.
- Store progress in a database.
- Add private user profiles.
- Split the large JavaScript file into smaller modules.
- Add automated UI tests.
- Add accessibility review for keyboard navigation and screen readers.
- Add real challenge authoring tools.

## Important Limitations

This version is local-first and front-end-only:

- There is no real anti-cheat.
- There is no real global ranking.
- Ranked validation runs locally in the browser.
- Progress is stored only in the browser.
- Clearing `localStorage` removes progress.
- The “World Ranking” is currently a visual placeholder/mock ranking.

## License

No license has been selected yet. If this project becomes open-source, consider adding an MIT license or another appropriate license.
