<!-- <template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template> -->

<!-- <template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>    
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />       
    </div>
  </section>
</template> -->

<!-- <template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template> -->

<!-- <template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template> -->

<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="age"
      @save-data="logEmittedData"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
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
import { computed, provide, ref, watch, type Ref } from "vue";

import UserData, { type User } from "./components/UserData.vue";
import { userAgeInjectionKey } from "@/injectionKeys";

// const uName: Ref<string> = ref("Paul");
const firstName: Ref<string> = ref("");
const lastName: Ref<string> = ref("");
const lastNameInput: Ref<HTMLInputElement | null> = ref(null);
const uAge: Ref<number> = ref(31);

provide(userAgeInjectionKey, uAge);

const uName = computed<string>(function () {
  return firstName.value + " " + lastName.value;
});

watch([uAge, uName], function (newValues, oldValues) {
  console.log("Old age: " + oldValues[0]);
  console.log("New age: " + newValues[0]);
  console.log("Old name: " + oldValues[1]);
  console.log("New name: " + newValues[1]);
});

function setNewAge() {
  uAge.value = 33;
}

// function setFirstName(event: Event) {
//   firstName.value = (event.target as HTMLInputElement).value;
// }

function setLastName(event: Event) {
  // lastName.value = (event.target as HTMLInputElement).value;
  lastName.value = lastNameInput.value!.value;
}

function logEmittedData(user: User) {
  console.log(user);
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
