import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import purgecss from "astro-purgecss";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  
  /* experimental: {
    assets: true
   }, */
  // markdown: {
  //   syntaxHighlight: 'prism',
  //   remarkPlugins: [remarkPlugin1],
  //   gfm: true,
  // },
  integrations: [vue(),
  /* purgecss(), */
  mdx({
    // `syntaxHighlight` inherited from Markdown

    // Markdown `remarkPlugins` ignored,
    // only `remarkPlugin2` applied.
    // remarkPlugins: [remarkPlugin2],
    // `gfm` overridden to `false`
    // gfm: false,
  }), tailwind()],
  base: "/",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/component-mixin";`
        }
      }
    }
  }
});