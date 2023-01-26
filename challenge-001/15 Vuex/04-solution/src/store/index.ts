import type { State } from "vue";
import { createStore } from "vuex";

import productsModule from "./modules/products";
import cartModule from "./modules/cart";

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    } as State;
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      return new Promise<string>((resolve, _reject) => {
        context.commit("logout");
        resolve("Loggedout");
        // reject("Error occurred");
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
