import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { Coach, CoachesState } from ".";

const actions: ActionTree<CoachesState, State> = {
  registerCoach(context, data: Omit<Coach, "id">) {
    const coachData = {
      ...data,
      id: context.rootGetters.userId,
    };

    context.commit("registerCoach", coachData);
  },
};

export default actions;
