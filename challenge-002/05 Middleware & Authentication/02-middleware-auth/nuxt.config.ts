// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Pages, Routing & Views",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Practical project" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans",
        },
      ],
    },
    /**
     * Default values for layout transitions.
     */
    layoutTransition: {
      name: "fade",
      mode: "out-in",
    },
    /**
     * Default values for page transitions.
     */
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  /**
   * Global CSS
   */
  css: [
    // CSS file in the project
    "~/assets/styles/main.css",
  ],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },
});
