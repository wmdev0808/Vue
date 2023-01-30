import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { CoachRequest, RequestsState } from ".";

const requestsActions: ActionTree<RequestsState, State> = {
  async contactCoach(context, payload: Omit<CoachRequest, "id">) {
    const newRequest = {
      userEmail: payload.userEmail,
      message: payload.message,
    } as CoachRequest;

    const response = await fetch(
      `${import.meta.env.VITE_DB_BASE_URL}/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId as string;
    const token = context.rootGetters.token as string;
    const response = await fetch(
      `${
        import.meta.env.VITE_DB_BASE_URL
      }/requests/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests."
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};

export default requestsActions;
