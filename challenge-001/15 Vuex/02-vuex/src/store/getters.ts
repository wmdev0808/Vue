import type { State } from "vue";

export default {
  userIsAuthenticated(state: State) {
    return state.isLoggedIn;
  },
};
