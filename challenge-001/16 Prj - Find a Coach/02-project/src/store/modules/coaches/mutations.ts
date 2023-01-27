import type { MutationTree } from "vuex";
import type { Coach, CoachesState } from ".";

const coachesMutations: MutationTree<CoachesState> = {
  registerCoach(state: CoachesState, payload: Coach) {
    state.coaches.push(payload);
  },
};

export default coachesMutations;
