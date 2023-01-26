import type { CounterActionPayload } from ".";
import type { CounterState } from ".";

export default {
  increment(state: CounterState) {
    state.counter = state.counter + 2;
  },
  increase(state: CounterState, payload: CounterActionPayload) {
    state.counter = state.counter + payload.value;
  },
};
