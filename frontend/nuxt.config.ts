import {resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias:{
    "@": resolve(__dirname, "/"),
  },
  css:[
    '~/assets/main.scss'
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})