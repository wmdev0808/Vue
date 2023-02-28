import { defineNuxtModule, extendPages } from "@nuxt/kit";
import { dirname, resolve } from "pathe";
import { fileURLToPath } from "mlly";

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      // Add /test page
      pages.push({
        name: "Test",
        path: "/test",
        file: resolve(__dirname, "./pages/test.vue"),
      });
    });
  },
});
