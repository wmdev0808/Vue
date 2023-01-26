import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface CounterStore {
    counter: number;
  }

  interface State {
    numbers: CounterStore;
    isLoggedIn: boolean;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
