import type { State } from "vue";
import type { ActionContext } from "vuex";
import type { CounterActionPayload, CounterState } from ".";

export default {
  increment(context: ActionContext<CounterState, State>) {
    setTimeout(function () {
      context.commit("increment");
    }, 2000);
  },
  increase(
    context: ActionContext<CounterState, State>,
    payload: CounterActionPayload
  ) {
    console.log(`context: => `, context);
    context.commit("increase", payload);
  },
  login() {},
};
