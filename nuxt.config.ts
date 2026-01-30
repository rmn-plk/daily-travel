// https://nuxt.com/docs/api/configuration/nuxt-config
import routeRules from "./rules/index.json";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-csurf"],
  routeRules: routeRules as any,
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL,
    },
    private: {
      API_KEY: process.env.API_KEY,
    }
  }
});
