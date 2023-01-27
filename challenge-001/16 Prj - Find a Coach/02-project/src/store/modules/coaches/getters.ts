import type { State } from "vue";
import type { GetterTree } from "vuex";

import type { Coach, CoachesState } from ".";

const coachesGetters: GetterTree<CoachesState, State> = {
  coaches(state: CoachesState) {
    return state.coaches;
  },
  hasCoaches(state: CoachesState) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches as Coach[];
    const userId = rootGetters.userId as string;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};

export default coachesGetters;
