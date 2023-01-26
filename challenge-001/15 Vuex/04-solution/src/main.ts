import BaseBadge from "@/components/ui/BaseBadge.vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-badge", BaseBadge);

app.mount("#app");
