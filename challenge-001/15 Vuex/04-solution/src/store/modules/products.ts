import type { State } from "vue";
import type { Module } from "vuex";

import image01 from "../../assets/images/Books_HD.jpg";
import image02 from "../../assets/images/Tent_at_High_Shelf_Camp.jpg";
import image03 from "../../assets/images/Good_Food_Display.jpg";

import type Product from "@/types/Product";

export interface ProductsState {
  products: Product[];
}

const productsModule: Module<ProductsState, State> = {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "p1",
          image: image01,
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          image: image02,
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image: image03,
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};

export default productsModule;
