import type { State } from "vue";
import type { ActionContext } from "vuex";

export default {
  login(context: ActionContext<State, State>) {
    context.commit("setAuth", { isAuth: true });
  },
  logout(context: ActionContext<State, State>) {
    context.commit("setAuth", { isAuth: false });
  },
};
