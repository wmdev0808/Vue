import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { Coach, CoachesState } from ".";

const coachesActions: ActionTree<CoachesState, State> = {
  async registerCoach(context, coachData: Omit<Coach, "id">) {
    const userId = context.rootGetters.userId;

    const response = await fetch(
      `${import.meta.env.VITE_DB_BASE_URL}/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json()

    if (!response.ok) {
      // error ...
    }

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
};

export default coachesActions;
