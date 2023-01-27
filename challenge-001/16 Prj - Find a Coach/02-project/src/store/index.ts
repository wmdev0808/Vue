import type { State } from "vue";
import { createStore } from "vuex";

import coachesModule from "./modules/coaches";

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: "c3",
    } as State;
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
