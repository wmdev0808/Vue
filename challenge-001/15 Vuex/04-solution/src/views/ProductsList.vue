<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type Product from "@/types/Product";

export default defineComponent({
  computed: {
    products() {
      return this.$store.getters["prods/products"] as Product[];
    },
  },
});
</script>

<script setup lang="ts">
import ProductItem from "../components/products/ProductItem.vue";
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
