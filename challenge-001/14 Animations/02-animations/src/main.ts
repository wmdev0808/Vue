import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import BaseModal from "@/components/BaseModal.vue";

// import "./assets/main.css";

const app = createApp(App);

app.component("base-modal", BaseModal);

app.use(router);

router.isReady().then(function () {
  app.mount("#app");
});
