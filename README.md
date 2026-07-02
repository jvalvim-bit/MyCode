# MyCode

> Upload note: this distribution keeps the project below 100 files for GitHub's web uploader by consolidating CSS partials into `styles/main.css`.


MyCode is a gamified programming learning platform for absolute beginners. It combines a progressive curriculum, interactive code questions, professional code editors, local Ranked mode, achievements, certificates, and bilingual content in Portuguese and English.

## Highlights

- **130 lesson tasks** across **13 progressive modules**.
- Beginner-first learning path: first contact, memory boxes, data types, operators, decisions, loops, collections, Python, JavaScript, DOM, and APIs.
- Interactive questions with tap-to-fill blocks, code tracing, projects, and detailed feedback.
- Reusable professional code editor style inspired by Ranked mode: line numbers, dark theme, syntax highlighting, indentation handling, and code-focused UI.
- Local/offline **Ranked** mode with daily challenge, timer, score calculation, RP, leagues, local history, and training mode.
- Achievement system with unlock notifications, equipped achievements, and a maximum of five equipped badges.
- Certificate area with PDF generation.
- Progress persisted locally through `localStorage`.
- No backend requirement: the project runs as a static frontend.

## Tech Stack

- HTML5
- CSS3 with modular partials
- JavaScript ES Modules
- Vite for local development/build
- LocalStorage for local progress, achievements, Ranked history, and settings
- Canvas/PDF-related browser APIs for certificates

## Project Structure

```txt
mycode/
  index.html
  assets/
    byte.png
    ranked-video.mp4
    generated/
  src/
    main.js
    runtime/
      appRuntime.js
    content/
      tasks.pt.js
      tasks.en.js
      extraQuestions.pt.js
      extraQuestions.en.js
      curriculum-index.json
      modules/
        pt/
        en/
      extra/
        pt/
        en/
  styles/
    main.css
    partials/
  docs/
    architecture.md
    curriculum.md
    ranked-mode.md
    achievements.md
  scripts/
    validate-content.mjs
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the Vite local URL shown in the terminal.

## Validation

```bash
npm run check
```

This validates JavaScript syntax and checks that the bilingual content modules are loadable.

## Static Deployment

The app can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or any static hosting provider.

For GitHub Pages, build with:

```bash
npm run build
```

Then publish the generated `dist/` folder or configure your deployment provider to run the build automatically.

## Important Limitations

This version intentionally does not use a backend. Therefore:

- Ranked mode is local/personal, not a real global competitive ladder.
- Anti-cheat is educational and UI-level only.
- Progress is stored in the browser and can be lost if localStorage is cleared.
- Hidden tests are not truly secret because the app is fully client-side.

## License

This project is currently unlicensed. Add a license before allowing third-party reuse.
