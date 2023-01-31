<!-- <template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template> -->
<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
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

<!-- <script setup lang="ts">
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
</script> -->

<script setup lang="ts">
import { computed, ref, type Ref } from "vue";

// const uName: Ref<string> = ref("Paul");
const firstName: Ref<string> = ref("");
const lastName: Ref<string> = ref("");
const uAge: Ref<number> = ref(31);

const uName = computed<string>(function () {
  return firstName.value + " " + lastName.value;
});

function setNewAge() {
  uAge.value = 33;
}

function setFirstName(event: Event) {
  firstName.value = (event.target as HTMLInputElement).value;
}

function setLastName(event: Event) {
  lastName.value = (event.target as HTMLInputElement).value;
}

const userName = uName;
const age = uAge;
const setAge = setNewAge;
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
