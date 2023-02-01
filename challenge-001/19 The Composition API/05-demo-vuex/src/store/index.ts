import { createStore } from "vuex";

export interface AppState {
  counter: number;
}

const store = createStore<AppState>({
  state() {
    return {
      counter: 0,
    } as AppState;
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});

export default store;
