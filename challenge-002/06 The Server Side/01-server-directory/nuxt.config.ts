// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // https://nitro.unjs.io/config
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        /* redis connector options */
        // port: 6379, // Redis port
        // host: "127.0.0.1", // Redis host
        // username: "", // needs Redis >= 6
        // password: "",
        // db: 0, // Defaults to 0
        // tls: {}, // tls/ssl
      },
    },
  },
  runtimeConfig: {
    KEY: "xxx-xxxx",
  },
});
