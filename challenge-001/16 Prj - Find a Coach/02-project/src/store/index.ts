import type { State } from "vue";
import { createStore } from "vuex";

import coachesModule from "./modules/coaches";

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
