import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],

    vite: {
        plugins: [tailwindcss()],
    },

    adapter: cloudflare()
});