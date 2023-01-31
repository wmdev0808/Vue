<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { useRoute } from "vue-router";

import type Product from "@/types/Product";
import { productsInjectionKey } from "@/injectionKeys";

const products = inject<Product[]>(productsInjectionKey)!;

const route = useRoute();
console.log(`route: => `, route);

const selectedProduct = computed<Product>(
  () => products.find((product) => product.id === route.params.pid)!
);

const title = computed(() => selectedProduct.value.title);
const price = computed(() => selectedProduct.value.price);
const description = computed(() => selectedProduct.value.description);
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
