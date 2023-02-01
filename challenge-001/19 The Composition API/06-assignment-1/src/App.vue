<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-if="goalVisibility">{{ goal }}</h3> -->
  <!-- <h3 v-if="goalIsVisible">{{ courseGoal }}</h3> -->
  <!-- <h3 v-if="goalData.goalVisibility">{{ goalData.goal }}</h3> -->
  <h3 v-if="goalData.goalVisibility">{{ goalData.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<!-- <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      goal: "Finish the course!",
      goalVisibility: false,
    };
  },
  methods: {
    toggleGoalVisibility() {
      this.goalVisibility = !this.goalVisibility;
    },
  },
});
</script> -->

<script setup lang="ts">
import { ref, reactive } from "vue";

interface GoalData {
  goal: string;
  goalVisibility: boolean;
}
/** 1: */
// const courseGoal = ref<string>("Finish the course!");
// const goalIsVisible = ref<boolean>(false);
/** 2: */
// const goalData = ref<GoalData>({
//   goal: "Finish the course!",
//   goalVisibility: false,
// });
/** 3: */
const goalData: GoalData = reactive({
  goal: "Finish the course!",
  goalVisibility: false,
});

function toggleGoalVisibility() {
  // goalIsVisible.value = !goalIsVisible.value;
  // goalData.value.goalVisibility = !goalData.value.goalVisibility;
  goalData.goalVisibility = !goalData.goalVisibility;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
