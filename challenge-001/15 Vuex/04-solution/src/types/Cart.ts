import type CartItem from "./CartItem";

export default interface Cart {
  items: CartItem[];
  total: number;
  qty: number;
}
