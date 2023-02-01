<template>
  <h2>{{ counter }}</h2>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import type { AppState } from "@/store";

const store = useStore<AppState>();

const counter = computed<number>(() => store.getters.counter as number);
</script>
