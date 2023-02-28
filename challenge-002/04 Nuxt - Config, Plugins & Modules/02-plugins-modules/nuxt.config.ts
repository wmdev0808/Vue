// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["./modules/pages", "@nuxt/ui"],
  sourcemap: {
    server: true,
    client: false,
  },
});
