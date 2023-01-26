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
  mutations: {
    increment(state: State) {
      state.counter = state.counter + 2;
    },
    increase(state: State, payload: { value: number }) {
      state.counter = state.counter + payload.value;
    },
  },
});

app.use(store);

app.mount("#app");
