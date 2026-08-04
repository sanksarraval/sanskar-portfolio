# Sanskar Raval — Portfolio

Personal portfolio at [sanksarraval.github.io/sanskar-portfolio](https://sanksarraval.github.io/sanskar-portfolio). A single-page React site with a light **Prairie Spec** design: cool paper canvas, persimmon accent, spruce labels, Fraunces display type, and IBM Plex Sans/Mono.

## Tech stack

- **React 19** with Create React App
- **Tailwind CSS 3** — design tokens defined in `tailwind.config.js`
- **Framer Motion** — staggered hero load and scroll reveals
- **GitHub Pages** — deployed via `gh-pages`

## Sections

1. **Hero** — name, pitch, full-bleed photo, and CTAs (experience / resume)
2. **Experience** — work history as a left-aligned list with a mono date column
3. **Projects** — interactive project panels with tech tags and GitHub links
4. **Skills** — tag rows grouped by Languages / Frameworks / Azure / Data / Tools
5. **Publications** — citation-style list of IEEE papers with DOI links
6. **Contact** — direct email and social links

## Getting started

Requires Node.js v16 or higher.

```bash
git clone https://github.com/sanksarraval/sanskar-portfolio.git
cd sanskar-portfolio
npm install
npm start
```

The dev server runs at `http://localhost:3000/sanskar-portfolio`.

## Scripts

- `npm start` — development server with hot reload
- `npm run build` — optimized production build in `build/`
- `npm run deploy` — build and publish to GitHub Pages
- `npm test` — test runner

## Deployment

```bash
npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch. The site is served at `https://sanksarraval.github.io/sanskar-portfolio` (the `homepage` field in `package.json` controls the base path).

## Project structure

```
sanskar-portfolio/
├── public/
│   ├── index.html          # light theme-color + background (no flash)
│   └── images/             # profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.js       # fixed translucent nav, mono links
│   │   ├── Hero.js         # name, pitch, full-bleed photo, CTAs
│   │   ├── Experience.js   # work history (content lives here)
│   │   ├── Projects.js     # project panels (content lives here)
│   │   ├── Skills.js       # skill rows (content lives here)
│   │   ├── Publications.js # IEEE papers (content lives here)
│   │   ├── Contact.js      # email + social links
│   │   └── Footer.js       # slim footer row
│   ├── App.js              # section order + atmosphere wrapper
│   ├── index.css           # fonts, grain/grid atmosphere, component classes
│   └── index.js
├── tailwind.config.js      # canvas/ink/accent/spruce tokens, fonts
└── package.json
```

## Customization

- **Content** — all text lives in hardcoded arrays inside each component under `src/components/`.
- **Colors** — palette tokens in `tailwind.config.js`: `canvas` (paper), `ink` (text), `accent` (persimmon), `spruce` (labels).
- **Type** — Fraunces + IBM Plex imported at the top of `src/index.css`; shared classes (`section-label`, `panel`, `tag`, `btn-*`, `atmosphere`) are defined there too.

## Contact

- **GitHub**: [@sanksarraval](https://github.com/sanksarraval)
- **LinkedIn**: [Sanskar Raval](https://linkedin.com/in/sanskar-raval)
- **Email**: sanskarcanada123@gmail.com
