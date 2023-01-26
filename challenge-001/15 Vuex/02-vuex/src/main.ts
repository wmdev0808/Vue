import { createApp, type State } from "vue";
import { createStore, type Module } from "vuex";

import App from "./App.vue";

// import "./assets/main.css";

export interface CounterState {
  counter: number;
}

const counterModule: Module<CounterState, State> = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state: CounterState) {
      state.counter = state.counter + 2;
    },
    increase(state: CounterState, payload: { value: number }) {
      state.counter = state.counter + payload.value;
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
  },
  getters: {
    finalCounter(state: CounterState) {
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
  },
};

const store = createStore<State>({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    } as State;
  },
  mutations: {
    setAuth(state: State, payload: { isAuth: boolean }) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state: State) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
