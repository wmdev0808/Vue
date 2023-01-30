import type { MutationTree } from "vuex";
import type { AuthState } from ".";

const coachesMutations: MutationTree<AuthState> = {
  setUser(state: AuthState, payload: AuthState) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};

export default coachesMutations;
