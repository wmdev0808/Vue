import type { State } from "vue";
import type { Module } from "vuex";

import authMutations from "./mutations";
import authActions from "./actions";
import authGetters from "./getters";

export interface AuthState {
  userId: string | null;
  token: string | null;
  tokenExpiration?: string | null;
  didAutoLogout?: boolean;
}

const authModule: Module<AuthState, State> = {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      didAutoLogout: false,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};

export default authModule;
