// https://nuxt.com/docs/api/configuration/nuxt-config
/**
 * Nuxt 2:
 * export default {
 *  // ...
 * }
 */
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
   * Hooks are listeners to Nuxt events that are typically used in modules,
   * but are also available in nuxt.config.
   * Internally, hooks follow a naming pattern using colons (e.g., build:done).
   *
   * Nuxt 2:
   * router: {
   *  extendRoutes(routes) {
   *    //
   *  }
   * }
   */
  hooks: {
    /**
     * Called after pages routes are resolved.
     * @param pages  — Array containing resolved pages
     */
    "pages:extend"(pages) {
      //
    },
  },
  /**
   * Nuxt.js modules
   *
   * Nuxt 2:
   *
   * buildModules
   */
  modules: [],
  /**
   * Plugins to load before mounting the App
   */
  plugins: [],
  /**
   * Define the root directory of your application.
   */
  // rootDir: "/",
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
  /**
   * Define the source directory of your Nuxt application.
   * If a relative path is specified, it will be relative to the `rootDir`
   */
  // srcDir: "src",
});
