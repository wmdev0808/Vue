import type { State } from "vue";
import type { GetterTree } from "vuex";

import type { AuthState } from ".";

const authGetters: GetterTree<AuthState, State> = {
  userId(state: AuthState) {
    return state.userId;
  },
};

export default authGetters;
