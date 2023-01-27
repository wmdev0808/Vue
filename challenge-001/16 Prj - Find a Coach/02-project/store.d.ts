import { Store } from "vuex";

import type { CoachesState } from "@/store/modules/coaches/index";
import type { RequestsState } from "@/store/modules/requests";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    coaches: CoachesState;
    requests: RequestsState;
    userId: string;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
