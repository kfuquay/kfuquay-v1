// @ts-check
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    sitemap(),
    tailwind(),
    icon(),
    astroExpressiveCode({
      themes: ["houston", "min-light"],
    }),
    mdx(),
  ],
  adapter: netlify(),
});