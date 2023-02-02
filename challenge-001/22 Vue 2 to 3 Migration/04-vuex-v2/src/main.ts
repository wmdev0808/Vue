import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";

export interface User {
  id: string;
  name: string;
}

export interface RootState {
  users: User[];
}

Vue.use(Vuex);

const store = new Vuex.Store<RootState>({
  state() {
    return {
      users: [],
    };
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

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
