import { createStore } from "vuex";
import type { State } from "vue";

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";
import counterModule from "./modules/counter";

export interface ActionPayload {
  isAuth: boolean;
}

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    } as State;
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
