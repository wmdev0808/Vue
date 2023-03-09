// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // https://nitro.unjs.io/config
  nitro: {},
  runtimeConfig: {
    KEY: "xxx-xxxx",
  },
});
