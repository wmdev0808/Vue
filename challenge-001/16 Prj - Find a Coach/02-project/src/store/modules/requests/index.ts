import requestsMutations from "./mutations";
import requestsActions from "./actions";
import type { Module } from "vuex";
import type { State } from "vue";

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
};

export default requestsModule;
