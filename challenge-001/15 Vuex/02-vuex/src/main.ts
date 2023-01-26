import { createApp, type State } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

// import "./assets/main.css";

const app = createApp(App);

const store = createStore<State>({
  state() {
    return {
      counter: 0,
    };
  },
});

app.use(store);

app.mount("#app");
