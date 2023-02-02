import { createApp, type State } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

// import './assets/main.css'

const app = createApp(App);

const store = createStore({
  state() {
    return {
      users: [],
    } as State;
  },
  mutations: {
    addUser(state, payload) {
      const newUser = {
        id: new Date().toISOString(),
        name: payload.name,
      };
      state.users.push(newUser);
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit("addUser", payload);
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
});

app.use(store);

app.mount("#app");
