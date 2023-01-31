<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";

import { userAgeInjectionKey } from "../injectionKeys";

export interface User {
  firstName: string;
  lastName: string;
  // age: number;
}

const props = defineProps<User>();

const uName = computed(function () {
  return props.firstName + " " + props.lastName;
});
const userName = uName;

const age = inject<number>(userAgeInjectionKey);

const emit = defineEmits<{ (e: "save-data", user: User): void }>();

onBeforeMount(function () {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");
  emit("save-data", props);
});

onBeforeUpdate(function () {
  console.log("onBeforeUpdate");
});

onUpdated(function () {
  console.log("onUpdated");
});

onBeforeUnmount(function () {
  console.log("onBeforeUnmount");
});

onUnmounted(function () {
  console.log("onUnmounted");
});
</script>
