import type { InjectionKey } from "vue";
import type Product from "./types/Product";

export const addProductInjectionKey = Symbol() as InjectionKey<
  (productData: Omit<Product, "id">) => void
>;

export const productsInjectionKey = Symbol() as InjectionKey<Product[]>;
