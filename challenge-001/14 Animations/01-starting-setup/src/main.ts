import { createApp } from "vue";

import App from "./App.vue";
import BaseModal from "@/components/BaseModal.vue";

// import "./assets/main.css";

const app = createApp(App);

app.component("base-modal", BaseModal);

app.mount("#app");
