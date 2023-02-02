import { Store } from "vuex";

import User from "./src/types/User";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    users: User[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
