import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { CoachRequest, RequestsState } from ".";

const requestsActions: ActionTree<RequestsState, State> = {
  contactCoach(context, payload: Omit<CoachRequest, "id">) {
    const newRequest = {
      ...payload,
      id: new Date().toISOString(),
    };
    context.commit("addRequest", newRequest);
  },
};

export default requestsActions;
