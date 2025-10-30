# Sum Calculator App

A minimal React + Vite application that lets users input two numbers and calculate their sum.

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)

## Install

Open a terminal in the project root (`d:\Exercises\IA03 - Sum Calculator App`) and run:

```powershell
npm install
```

This will install project dependencies including `sass` which is used for the component SCSS module.

## Run (development)

Start the dev server with:

```powershell
npm run dev
```

By default app will print the local URL in the terminal with port 3000. If you need to run on a specific port, set a `PORT` environment variable or create a `.env` file in the project root with the desired port:

One-off in PowerShell:

```powershell
#$env:PORT = '3001'; npm run dev
$env:PORT = '3001'; npm run dev
```

Create `.env` file (permanent for local development):

```text
PORT=3001
```

## Build / Preview

Build for production:

```powershell
npm run build
```

Run locally:

```powershell
npm run dev
```

## Files of interest

- `src/components/SumCalculator/index.jsx` — main component (uses React hooks for state and validation)
- `src/components/SumCalculator/SumCalculator.module.scss` — SCSS module for the component
- `src/App.jsx` — top-level app that renders the calculator
- `src/App.css` — app-level styles (global / layout)

## Notes

- The Sum Calculator component uses an SCSS module (`SumCalculator.module.scss`) so styles are scoped to the component. Vite compiles SCSS automatically after installing `sass`.

## Deployment
- The app is deployed at [https://sum-calculator-app.vercel.app](https://sum-calculator-app.vercel.app).