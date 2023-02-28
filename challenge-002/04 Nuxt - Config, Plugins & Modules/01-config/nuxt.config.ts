// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    /** Head of the page */
    head: {
      title: "WD Blog",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "My cool Web Development Blog" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans",
        },
      ],
    },
  },
  /**
   * Shared build configuration
   */
  build: {},
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
  /**
   * Whether Nuxt is running in development mode.
   */
  dev: false,
  /**
   * Plugins to load before mounting the App
   */
  plugins: [],
  /**
   * Nuxt.js modules
   */
  modules: [],
  /**
   * Define the root directory of your application.
   */
  rootDir: "/",
  /**
   * Additional options passed to vue-router
   */
  router: {
    options: {
      linkActiveClass: "active",
    },
  },
  /**
   * Runtime config allows passing dynamic config and environment variables to the Nuxt app context.
   */
  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },
});
