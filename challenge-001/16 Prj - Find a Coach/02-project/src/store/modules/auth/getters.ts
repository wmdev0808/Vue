import type { State } from "vue";
import type { GetterTree } from "vuex";

import type { AuthState } from ".";

const authGetters: GetterTree<AuthState, State> = {
  userId(state: AuthState) {
    return state.userId;
  },
  token(state: AuthState) {
    return state.token;
  },
  isAuthenticated(state: AuthState) {
    return !!state.token;
  },
  didAutoLogout(state: AuthState) {
    return state.didAutoLogout;
  },
};

export default authGetters;
