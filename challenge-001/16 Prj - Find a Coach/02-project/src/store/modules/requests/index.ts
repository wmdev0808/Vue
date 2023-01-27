import type { Module } from "vuex";
import type { State } from "vue";

import requestsMutations from "./mutations";
import requestsActions from "./actions";
import requestsGetters from "./getters";

export interface CoachRequest {
  id: string;
  coachId: string;
  userEmail: string;
  message: string;
}

export interface RequestsState {
  requests: CoachRequest[];
}

const requestsModule: Module<RequestsState, State> = {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: requestsMutations,
  actions: requestsActions,
  getters: requestsGetters,
};

export default requestsModule;
