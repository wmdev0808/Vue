import { Store } from "vuex";

import type { ProductsState } from "./src/store/modules/products";
import CartState from "./src/types/Cart";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    isLoggedIn: boolean;
    prods: ProductsState;
    cart: CartState;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
