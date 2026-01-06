# Portfolio (React + TypeScript + Vite)

A clean, modern single-page portfolio with a data-driven content file and light/dark theme.

## Quick start

```bash
npm install
npm run dev
```

## Edit your content

All copy, links, projects, and experience live in:

- `src/content.ts`

Update:

- `content.profile.*`: name, headline, summary
- `content.links.*`: email, GitHub, LinkedIn, resume
- `content.projects`: your selected work
- `content.experience`: internships/research
- `content.skills`: skills groups

If you want a PDF resume button, put `resume.pdf` under `public/` and set:

- `content.links.resume = { label: 'Resume', href: '/resume.pdf' }`

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

- Run `npm run build`
- Deploy the `dist/` folder

If your site is served from a sub-path (e.g. `https://user.github.io/repo/`), set Vite `base` in `vite.config.ts` to `'/repo/'`.
