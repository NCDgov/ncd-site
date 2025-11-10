# Temporary Landing Page

This branch hosts a pared-down Jekyll project used while the primary website is offline. It ships with the U.S. Web Design System (USWDS) and a PostCSS + Autoprefixer pipeline for modern CSS support.

## Requirements

- Ruby 3.2.2 (see `.ruby-version`)
- Bundler 2.5+
- Node.js 18+
- npm 9+

## Getting started

```bash
bundle install
npm install
npm run develop
```

The `develop` script copies the latest USWDS assets and starts `jekyll serve --livereload`.

## Build

```bash
npm run build
```

This copies the USWDS assets, runs the Jekyll build, and post-processes CSS through Autoprefixer.

## Deployment notes

- The landing page lives entirely within this branch so it can be swapped independently of the main site.
- Update `index.md` and assets as needed. Any Sass authored in `assets/css/main.scss` will be compiled with USWDS tokens and passed through Autoprefixer automatically.
