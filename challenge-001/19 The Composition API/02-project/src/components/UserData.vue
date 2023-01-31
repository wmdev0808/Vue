<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from "vue";

import { userAgeInjectionKey } from "@/injectionKeys";

export interface User {
  firstName: string;
  lastName: string;
  // age: number;
}

const props = defineProps<User>();
const uName = computed(function () {
  return props.firstName + " " + props.lastName;
});

const age = inject<number>(userAgeInjectionKey);

const emit = defineEmits<{ (e: "save-data", user: User): void }>();

onMounted(() => emit("save-data", props));
const userName = uName;
// computed: {
//   userName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
</script>
