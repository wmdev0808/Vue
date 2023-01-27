import type { MutationTree } from "vuex";
import type { Coach, CoachesState } from ".";

const coachesMutations: MutationTree<CoachesState> = {
  registerCoach(state: CoachesState, payload: Coach) {
    state.coaches.push(payload);
  },
  setCoaches(state: CoachesState, payload: Coach[]) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};

export default coachesMutations;
