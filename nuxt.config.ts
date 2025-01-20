// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxthub/core",
    "@sentry/nuxt/module",
  ],

  runtimeConfig: {
    strapi: {
      url: process.env.NUXT_STRAPI_URL,
    },
    public: {
      strapi: {
        url: process.env.NUXT_STRAPI_URL,
      },
    },
  },

  strapi: {
    cookie: {
      path: "/",
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
      sameSite: true,
    },
    prefix: "/api",
  },

  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
  },

  colorMode: {
    classSuffix: "",
    preference: "light",
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  typescript: {
    typeCheck: true,
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: "baqsha",
      project: "adicom",
    },
  },

  sourcemap: {
    client: "hidden",
  },
});
