import type { State } from "vue";
import type { Module } from "vuex";

import counterActions from "./actions";
import counterGetters from "./getters";
import counterMutations from "./mutations";

export interface CounterState {
  counter: number;
}

export interface CounterActionPayload {
  value: number;
}

const counterModule: Module<CounterState, State> = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};

export default counterModule;
