<template>
  <button @click="inc">Increment</button>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

import type { AppState } from "@/store";

const store = useStore<AppState>();

function inc() {
  store.dispatch("increment");
}
</script>
