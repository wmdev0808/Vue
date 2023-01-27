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

  async loadCoaches(context) {
    const response = await fetch(
      `${import.meta.env.VITE_DB_BASE_URL}/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit("setCoaches", coaches);
  },
};

export default coachesActions;
