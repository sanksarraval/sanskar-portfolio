# Sanskar Raval — Portfolio

Personal portfolio at [sanksarraval.github.io/sanskar-portfolio](https://sanksarraval.github.io/sanskar-portfolio). A single-page React site with a dark technical design: near-black canvas, mint/teal accent, Space Grotesk headings, and JetBrains Mono labels.

## Tech stack

- **React 19** with Create React App
- **Tailwind CSS 3** — design tokens defined in `tailwind.config.js`
- **Framer Motion** — restrained fade/rise animations on scroll
- **GitHub Pages** — deployed via `gh-pages`

## Sections

1. **Hero** — name, pitch, photo, and CTAs (experience / resume)
2. **Experience** — work history as a left-aligned list with a mono date column
3. **Projects** — bordered panels with tech tags and GitHub links
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
│   ├── index.html          # dark theme-color + background (no white flash)
│   └── images/             # profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.js       # fixed translucent nav, mono links
│   │   ├── Hero.js         # name, pitch, photo, CTAs
│   │   ├── Experience.js   # work history (content lives here)
│   │   ├── Projects.js     # project panels (content lives here)
│   │   ├── Skills.js       # skill tag rows (content lives here)
│   │   ├── Publications.js # IEEE papers (content lives here)
│   │   ├── Contact.js      # email + social links
│   │   └── Footer.js       # slim footer row
│   ├── App.js              # section order
│   ├── index.css           # fonts, component classes (panel, tag, btn-*)
│   └── index.js
├── tailwind.config.js      # canvas/ink/accent color tokens, fonts
└── package.json
```

## Customization

- **Content** — all text lives in hardcoded arrays inside each component under `src/components/`.
- **Colors** — the palette is three token groups in `tailwind.config.js`: `canvas` (backgrounds and borders), `ink` (text), and `accent` (teal).
- **Type** — fonts are imported at the top of `src/index.css`; shared classes (`section-label`, `panel`, `tag`, `btn-primary`, etc.) are defined there too.

## Contact

- **GitHub**: [@sanksarraval](https://github.com/sanksarraval)
- **LinkedIn**: [Sanskar Raval](https://linkedin.com/in/sanskar-raval)
- **Email**: sanskarcanada123@gmail.com
