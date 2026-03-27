# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal resume/portfolio website for Nitesh Daga, hosted at [nitesh-daga.github.io](https://nitesh-daga.github.io/). It is a static site with no build step — changes to HTML/CSS/JS are deployed directly via GitHub Pages.

Additionally, the repo contains an npm package (`npm_resume_nitesh`) that renders the resume in the terminal using Node.js and `chalk`.

## Development

There is no build process. To preview locally, open `index.html` directly in a browser or use a simple HTTP server:

```bash
npx serve .
# or
python3 -m http.server
```

To preview the terminal resume:
```bash
node index.js
# or after npm install:
npx npm_resume_nitesh
```

To install npm dependencies (only needed for the terminal resume):
```bash
npm install
```

## Publishing the npm package

The package is published to npm as `npm_resume_nitesh`. Bump `version` in `package.json` before publishing:
```bash
npm publish
```

## Architecture

- **`index.html`** — main resume page (current/canonical version)
- **`assets/css/style.css`** — all styling including dark theme (`.dark-theme` class on `<body>`)
- **`assets/js/script.js`** — theme toggle logic; reads `?theme=dark` URL param on load and updates PDF download link accordingly
- **`index.js`** — Node.js CLI that prints the resume to the terminal with colored output using `chalk`
- **`resume_pr.html`** — alternate resume layout
- **`v1/`, `v2/`** — archived older versions of the resume

## Dark mode

The site supports dark mode via a toggle checkbox in the header. The theme is stored as a URL query parameter (`?theme=dark`) rather than localStorage. The download button href switches between `assets/nitesh_daga_github_theme_dark.pdf` and `assets/nitesh_daga_github_theme_light.pdf` based on the active theme.
