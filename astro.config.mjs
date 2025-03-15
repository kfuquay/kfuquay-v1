// @ts-check
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://kfuquay.dev",
  output: "static",
  // Prefetch all internal links in browsers which support it
  prefetch: {
    prefetchAll: true,
  },
  build: {
    inlineStylesheets: "never",
  },
  integrations: [sitemap(), tailwind(), icon(), astroExpressiveCode({
    themes: ["houston", "min-light"],
  }), mdx(), purgecss()],
  adapter: netlify(),
});