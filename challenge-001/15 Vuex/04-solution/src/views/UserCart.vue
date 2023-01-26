<template>
  <section>
    <h2>Your Cart</h2>
    <h3>
      Total Amount:
      <base-badge :mode="BadgeMode.ELEGANT">${{ cartTotal }}</base-badge>
    </h3>
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cart-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type CartItemType from "@/types/CartItem";

export default defineComponent({
  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"] as number;
    },
    cartItems() {
      return this.$store.getters["cart/products"] as CartItemType[];
    },
  },
});
</script>

<script setup lang="ts">
import CartItem from "../components/cart/CartItem.vue";
import BadgeMode from "@/types/BadgeMode";
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
