# CLAUDE.md — AI Assistant Guide for Portfolio Codebase

## Project Overview

James De Raja's performance engineering portfolio — a content-driven SPA showcasing real-time graphics optimization work in Unity, XR, and mobile game development. The site includes technical case studies, controlled XR lab experiments, shipped game titles, writing, and an AI-powered game suggestion tool.

**Live site:** https://jamesderaja.com
**Stack:** Vite + React 18 + TypeScript + TailwindCSS, deployed on Vercel
**Serverless API:** Vercel Functions (Node.js) for email and AI features

---

## Repository Structure

```
portfolio/
├── src/
│   ├── main.tsx              # React entry point (Router, HelmetProvider, StrictMode)
│   ├── App.tsx               # Route definitions (~35 routes)
│   ├── types.ts              # Shared TypeScript interfaces
│   ├── index.css             # Global CSS + Tailwind directives + custom utilities
│   ├── vite-env.d.ts         # Vite environment type declarations
│   ├── components/           # Reusable UI components (22 files)
│   ├── sections/             # Homepage section components (7 sections)
│   ├── pages/                # Page-level components (HomePage, etc.)
│   ├── layouts/              # Shared layout wrappers
│   ├── data/                 # Static TypeScript data files
│   ├── caseStudies/          # 4 deep-dive case study pages
│   └── lab/                  # 8 XR performance lab experiment pages
├── api/                      # Vercel serverless functions
│   ├── send-contact-form.js
│   ├── send-game-suggestion.js
│   └── generate-game-suggestion.js
├── public/                   # Static assets (images, resume, sitemap, robots.txt)
├── docs/
│   └── DEPLOYMENT.md         # Vercel deployment notes
├── scripts/
│   └── generate_resumes.py   # Python script for PDF resume generation
├── vercel.json               # SPA routing rewrite config
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.app.json         # Strict TS config for src/
└── eslint.config.js
```

---

## Development Workflows

### Start Development

```bash
npm run dev          # Vite dev server only (frontend HMR)
npm run dev:api      # API server only (Node.js)
npm run dev:full     # Both concurrently (requires concurrently package)
```

### Build & Preview

```bash
npm run build        # Production build → dist/
npm run preview      # Preview the production build locally
```

### Lint

```bash
npm run lint         # ESLint across entire project
```

There are **no test commands** — this project has no automated test suite.

### Environment Variables

Copy `.env.example` (if it exists) or create `.env` at project root:

```env
VITE_EMAIL_SERVICE=gmail
VITE_EMAIL_USER=your-gmail@gmail.com
VITE_EMAIL_PASS=your-gmail-app-password
VITE_GEMINI_API_KEY=your-google-ai-api-key
```

> These are used by Vercel serverless functions in `api/`. The `VITE_` prefix is required by Vite for env var exposure, but the API files access `process.env` directly.

---

## Architecture & Key Conventions

### Routing

All routes are defined in `src/App.tsx`. The site is an SPA — `vercel.json` rewrites all paths to `/index.html` for client-side routing to work on Vercel.

Route groups:
- `/` — HomePage (all sections visible via scroll)
- `/case-study/*` — 4 detailed case study pages
- `/lab/*` — 8 XR performance experiment pages
- `/resume` — Resume viewer
- `/game-suggestion` — AI-powered game concept generator

### Data Layer

All content is hardcoded in TypeScript data files under `src/data/`. There is no database or CMS.

| File | Contents |
|------|----------|
| `src/data/projects.ts` | Work project cards (highlights, impact, links) |
| `src/data/xrLab.ts` | XR lab experiment specs and table row data |
| `src/data/xrStressLabResults.ts` | Detailed measurement result rows |
| `src/data/shippedTitles.ts` | Published game title entries |
| `src/data/writing.ts` | Blog/article post metadata |

**When adding or editing portfolio content, edit the data files — do not hardcode content into components.**

### TypeScript Conventions

- Strict mode is enabled (`tsconfig.app.json`): no unused locals, no unused parameters, no implicit `any`.
- Shared types live in `src/types.ts` — add new shared interfaces there.
- All component props should be typed inline or via interfaces.
- Avoid `as` casts unless strictly necessary.

### Component Conventions

- **Functional components only** — no class components.
- Default exports for page-level components; named exports are acceptable for sections and smaller components.
- State with `useState`, side effects with `useEffect`, route info with `useLocation`/`useNavigate`.
- SEO meta tags are managed via a `<Seo>` component (wraps `react-helmet-async`). Every page should include it.

### Styling Conventions

- **Tailwind utility-first** — avoid writing custom CSS unless necessary.
- Custom animations and utilities are defined in `src/index.css` (e.g., `hover-spin-scale`, `hover-float`, `hover-tilt`, `hover-wiggle`, `.bg-site-pattern`).
- Dark/minimal aesthetic: `bg-black`, `bg-gray-900`, `border-gray-700/800`, white/gray text.
- Responsive breakpoints: mobile-first with `sm:` and `md:` modifiers.
- Prefer Tailwind `bg-black/95` alpha syntax over arbitrary hex values.

### API / Serverless Functions

The `api/` directory contains Vercel serverless functions (Node.js, CommonJS `.js` files):
- Each file exports a default handler `(req, res)`.
- All handlers set CORS headers to allow cross-origin requests.
- Respond with appropriate HTTP status codes (200, 400, 405, 500).
- Email is sent via Nodemailer using Gmail credentials from environment variables.
- AI content is generated using `@google/generative-ai` with the `gemini-pro` model.

> Do not add frontend-only imports (React, etc.) to `api/` files. These run in Node.js, not the browser.

### SEO

- `index.html` contains base meta tags and JSON-LD structured data.
- Per-page SEO is handled via the `<Seo>` component using `react-helmet-async`.
- `public/sitemap.xml` and `public/robots.txt` are static files — update `sitemap.xml` manually when adding new routes.

---

## Adding Content

### New Case Study

1. Create a new file in `src/caseStudies/MyCaseStudy.tsx`.
2. Add a route in `src/App.tsx`: `<Route path="/case-study/my-case-study" element={<MyCaseStudy />} />`.
3. Add a link to it from `src/sections/Work.tsx` or the relevant project in `src/data/projects.ts`.
4. Update `public/sitemap.xml` with the new URL.

### New Lab Experiment

1. Create a new file in `src/lab/MyExperiment.tsx`.
2. Add a route in `src/App.tsx`.
3. Add the experiment spec to `src/data/xrLab.ts`.
4. Update `public/sitemap.xml`.

### New Data Entry (projects, writing, etc.)

Edit the appropriate file in `src/data/` following the existing TypeScript interface shape defined in `src/types.ts`.

---

## Deployment

Deployed on **Vercel**. The `vercel-build` script (`vite build`) is used as the build command. Merging to `master` triggers an automatic deploy.

See `docs/DEPLOYMENT.md` for notes on Vercel's deployment protection settings (401 fix).

Environment variables must be set in the Vercel project dashboard — they are not committed to the repo.

---

## Dependencies Overview

| Category | Package | Version |
|----------|---------|---------|
| Framework | react, react-dom | 18.3.1 |
| Build | vite | 5.4.2 |
| Language | typescript | 5.5.3 |
| Routing | react-router-dom | 6.30.3 |
| Styling | tailwindcss | 3.4.1 |
| Icons | lucide-react | 0.344.0 |
| SEO | react-helmet-async | 3.0.0 |
| Email | nodemailer | 7.0.5 |
| AI | @google/generative-ai | 0.24.1 |
| Dev | eslint, concurrently, dotenv | various |

---

## Things to Avoid

- **Do not add a database or CMS** — all content is intentionally static TypeScript.
- **Do not add a test framework** unless explicitly requested — the project currently has none.
- **Do not modify `vercel.json` rewrites** without understanding the SPA routing implications.
- **Do not commit `.env`** — it is in `.gitignore`. Credentials go to Vercel's dashboard.
- **Do not use class components** or older React patterns (`componentDidMount`, etc.).
- **Do not add inline styles** when equivalent Tailwind utilities exist.
- **Do not use `any` types** — the TypeScript config flags them as errors.
