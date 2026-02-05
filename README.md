# Mohanned Omer

Personal technical portfolio for Mohanned Omer, an ML engineer. The site is a public workspace for projects, professional and research experience, books, and future technical writing.

Live site: [mohanned-omer.com](https://mohanned-omer.com)

## Tech stack

- React 17
- React Router DOM 5
- Create React App / react-scripts
- Tailwind CSS 3
- GitHub Pages workflow and Vercel deployment config

## Local development

```bash
npm install
npm start
```

Production checks:

```bash
npm test -- --watchAll=false
npm run build
```

Regenerate derived summaries and index data after editing content:

```bash
npm run data
```

## Content architecture

- `src/data/siteContent.js` — homepage copy, navigation, project outputs, lab log, and contact details.
- `src/data/projects.js` and `src/data/projectSummaries.js` — project detail and list data.
- `src/data/experience.js` — professional, research, and teaching experience.
- `src/data/activity.js` — profile links and current activity.
- `src/data/books.js` — bookshelf entries and reading status.
- `src/data/posts.js` and `src/data/researchPapers.js` — dormant writing systems retained for future genuine content.
- `src/config/routes.js` — lazy route configuration and preloading.

The resume is served directly from `public/resume.pdf`. Project media slots are intentionally left empty until the corresponding screenshots, video, diagrams, or repositories are ready to publish.

Pushes to `main` are tested, built, and deployed through GitHub Actions. The workflow also publishes `build/404.html` as a single-page app fallback so nested routes continue to work when opened directly.
