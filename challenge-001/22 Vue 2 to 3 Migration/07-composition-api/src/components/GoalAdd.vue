<template>
  <section class="container">
    <form @submit.prevent="addGoal">
      <div>
        <label for="goaltext">Goal</label>
        <input type="text" id="goaltext" v-model="enteredText" />
      </div>
      <p v-if="invalidInput">Please enter a valid goal text (non-empty).</p>
      <button>Add Goal</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const enteredText = ref<string>("");
const invalidInput = ref<boolean>(false);

const emit = defineEmits<{ (e: "add-goal", text: string): void }>();

function addGoal() {
  invalidInput.value = false;
  if (enteredText.value === "") {
    invalidInput.value = true;
    return;
  }
  emit("add-goal", enteredText.value);
  enteredText.value = "";
}

watch(invalidInput, (newVal: boolean) => {
  if (newVal) {
    console.log("Analytics: Invalid Input");
  }
});
</script>

<style scoped>
form {
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>
