// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: ["nitro-cloudflare-dev", "@nuxtjs/tailwindcss", "@vueuse/nuxt"]
})