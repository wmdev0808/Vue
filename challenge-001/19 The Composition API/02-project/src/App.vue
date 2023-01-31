<!-- <template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template> -->
<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<!-- <script lang="ts">
import { ref, type Ref } from "vue";

export default {
  setup() {
    const uName: Ref<string> = ref("Paul");

    setTimeout(function () {
      uName.value = "Pa";
    }, 2000);

    return { userName: uName };
  },
  // data() {
  //   return {
  //     userName: "Paul",
  //   };
  // },
};
</script> -->

<!-- <script setup lang="ts">
import { ref, type Ref } from "vue";

const uName: Ref<string> = ref("Paul");
const userName = uName;

setTimeout(function () {
  uName.value = "Pa";
}, 2000);
</script> -->

<script setup lang="ts">
import { reactive } from "vue";

interface User {
  name: string;
  age: number;
}

const user: User = reactive({
  name: "Paul",
  age: 31,
});

setTimeout(function () {
  user.name = "Pa";
  user.age = 32;
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
