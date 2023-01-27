import type { MutationTree } from "vuex";
import type { CoachRequest, RequestsState } from ".";

const requestsMutations: MutationTree<RequestsState> = {
  addRequest(state, payload: CoachRequest) {
    state.requests.push(payload);
  },
  setRequests(state, payload: CoachRequest[]) {
    state.requests = payload;
  },
};

export default requestsMutations;
