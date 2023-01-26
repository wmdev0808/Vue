import type { State } from "vue";
import type { CounterState } from ".";

export default {
  testAuth(
    _state: CounterState,
    _getters: any,
    rootState: State,
    _rootGetters: any
  ) {
    return rootState.isLoggedIn;
  },
  finalCounter(state: CounterState) {
    return state.counter * 3;
  },
  normalizedCounter(_state: CounterState, getters: any) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
