import type { ActionPayload } from ".";
import type { State } from "vue";

export default {
  setAuth(state: State, payload: ActionPayload) {
    state.isLoggedIn = payload.isAuth;
  },
};
