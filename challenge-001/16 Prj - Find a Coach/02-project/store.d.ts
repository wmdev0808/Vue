import { Store } from "vuex";

import { CoachesState } from "./src/store/modules/coaches/index";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    coaches: CoachesState;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
