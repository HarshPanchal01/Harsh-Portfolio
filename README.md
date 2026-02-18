# Harsh-Portfolio

Personal portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- `next-themes` for dark/light theming based on night owl theme by Sarah Drasner

## Local Development

### 1) Install dependencies

```bash
npm ci
```

### 2) Start the development server

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

- `npm run dev` - Starts the local development server
- `npm run build` - Builds the production static export into `out/`
- `npm run start` - Runs the production server (mainly for non-export deployments)
- `npm run lint` - Runs ESLint

## Production Build

```bash
npm run build
```

This project uses static export (`output: "export"`), so the build generates a static `out/` directory.

## Deployment (GitHub Pages)

Deployment is automated via GitHub Actions using `.github/workflows/static.yml`.

- Trigger: push to `main` (or manual `workflow_dispatch`)
- Build: `npm ci` + `npm run build`
- Artifact: uploads `out/`
- Deploy: uses `actions/deploy-pages`

`next.config.ts` is configured with dynamic `basePath`/`assetPrefix` for project-site deployments on GitHub Pages.

## Project Structure

```text
app/            # App Router pages and layout
components/     # UI sections (hero, projects, experience, etc.)
public/assets/  # Images, gifs, resume PDF
lib/            # Shared utilities
```
