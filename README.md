# Prakruti Avenues Real Estate Website

A responsive real-estate website for exploring Prakruti Avenues projects, brochures, gallery media, and contact information.

## Run locally

Requirements: Node.js and pnpm.

```sh
pnpm install
pnpm --dir artifacts/prakruti-avenues run dev
```

Vite prints the local URL after the server starts.

## Build

```sh
pnpm --dir artifacts/prakruti-avenues run build
```

The production output is written to `artifacts/prakruti-avenues/dist/public`.

## Project structure

- `artifacts/prakruti-avenues` — the main website
- `artifacts/mockup-sandbox` — design exploration sandbox
- `artifacts/api-server` — API workspace
- `lib` — shared API, schema, and database packages
- `artifacts/prakruti-avenues/public/assets` — site images, brochures, and videos

The website does not require a database connection to run locally.
