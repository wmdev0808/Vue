import type { State } from "vue";
import type { GetterTree } from "vuex";

import type { CoachRequest, RequestsState } from ".";

const requestsGetters: GetterTree<RequestsState, State> = {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    const requests = getters.requests as CoachRequest[];
    return requests && requests.length > 0;
  },
};

export default requestsGetters;
