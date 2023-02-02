import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import './assets/main.css'

const app = createApp(App);

app.use(router);

// Without initial navigation transition
router.isReady().then(() => {
  app.mount("#app");
});
