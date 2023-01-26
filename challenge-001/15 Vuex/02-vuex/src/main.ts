import { createApp, type State } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

// import "./assets/main.css";

const app = createApp(App);

const store = createStore<State>({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state: State) {
      state.counter = state.counter + 2;
    },
    increase(state: State, payload: { value: number }) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state: State, payload: { isAuth: boolean }) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      console.log(`context: => `, context);
      context.commit("increase", payload);
    },
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    finalCounter(state: State) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state: State) {
      return state.isLoggedIn;
    },
  },
});

app.use(store);

app.mount("#app");
