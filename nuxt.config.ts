// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt course on Youtube',
      meta: [
        {
          "name": "description",
          "content": "Follow a Nuxt 3 course on Youtube"
        }
      ]
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  modules: ['@nuxt/content', "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});