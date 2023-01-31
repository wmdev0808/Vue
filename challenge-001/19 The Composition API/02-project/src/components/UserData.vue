<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const props = defineProps<User>();
const uName = computed(function () {
  return props.firstName + " " + props.lastName;
});

const userName = uName;
// computed: {
//   userName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
</script>
