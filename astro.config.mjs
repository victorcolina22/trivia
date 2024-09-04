import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  devToolbar: {
    enabled: false,
  },

  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});