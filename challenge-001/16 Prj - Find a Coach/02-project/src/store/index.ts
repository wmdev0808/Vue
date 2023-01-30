import { createStore } from "vuex";

import authModule from "./modules/auth";
import coachesModule from "./modules/coaches";
import requestsModule from "./modules/requests";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
