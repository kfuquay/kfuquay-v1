# kfuquay-v1

_Repository for Kurt's personal portfolio/blog site._

Built with [Astro](https://astro.build/) & [tailwindcss](https://tailwindcss.com/)

Based on [the SorollaPortfolio astro theme](https://astro.build/themes/details/sorollaportfolio/).

---

## Summary

- [Deployment status](#deployment-status)
- [Local development](#local-development)
- [Project Structure](#project-structure)
  - [/src structure](#src-structure)

---

## Deployment status

### main

[![Netlify Status](https://api.netlify.com/api/v1/badges/bdae6e69-88ee-4e9d-9d11-06fd30547abe/deploy-status)](https://app.netlify.com/sites/kfuquay/deploys)

[☝️ Back to the summary](#summary)

---

## Local development

- run `npm i` to install dependencies
- run `npm run dev` to start local server

[☝️ Back to the summary](#summary)

---

## Project Structure

- **public/**: Contains public assets like images and fonts.
- **src/**: Includes the source code for the portfolio.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **astro.config.mjs**: Configuration file for Astro.
- **package.json**: Lists project dependencies and scripts.
- **tailwind.config.mjs**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.

### /src structure

The `/src` directory contains the main source code for the project. Below is an overview of its structure:

```bash
src
├── assets
│   ├── keyboard.jpg
│   └── hero.png
├── components
│   ├── BaseHead.astro
│   ├── Footer.astro
│   ├── FormattedDate.astro
│   ├── Header.astro
│   ├── HeaderLink.astro
│   ├── Hero.astro
│   ├── SkipLink.astro
│   └── WhatIDo.astro
├── consts.ts
├── content
│   └── blog
│       └── content in markdown format
├── content.config.ts
├── icons
│   ├── beach.svg
│   ├── github.svg
│   ├── linkedin.svg
│   └── web.svg
├── layouts
│   └── BlogPost.astro
├── pages
│   ├── about.astro
│   ├── blog
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── index.astro
│   └── rss.xml.js
└── styles
    ├── global.css
    └── hamburgers.css
```

#### Explanation

- **assets**: Contains image files used in the project.
- **components**: Contains reusable UI components built with Astro.
- **content**: Contains blog content in Markdown format.
- **content.config.ts**: Configuration file for content collections.
- **icons**: Contains SVG icon files used in the project.
- **layouts**: Contains layout components.
  - `BlogPost.astro`: Layout component for blog posts.
- **pages**: Contains the main pages of the site.
  - `blog/index.astro`: Blog index page.
  - `blog/[...slug].astro`: Dynamic route for individual blog posts.
- **styles**: Contains global and component-specific CSS files.
  - `global.css`: Global styles for the project.
  - `hamburgers.css`: Styles for the hamburger menu.

This structure helps in organizing the project files and makes it easier to maintain and scale the project.

[☝️ Back to the summary](#summary)
