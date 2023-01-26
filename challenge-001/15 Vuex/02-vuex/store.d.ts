import { Store } from "vuex";

import { CounterState } from "@/main";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    numbers: CounterState;
    isLoggedIn: boolean;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
