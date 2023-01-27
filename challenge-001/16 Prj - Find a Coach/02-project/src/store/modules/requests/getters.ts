import type { State } from "vue";
import type { GetterTree } from "vuex";

import type { CoachRequest, RequestsState } from ".";

const requestsGetters: GetterTree<RequestsState, State> = {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};

export default requestsGetters;
