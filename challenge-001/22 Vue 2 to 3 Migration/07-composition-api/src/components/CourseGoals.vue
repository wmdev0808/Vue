<template>
  <div>
    <goal-list :goals="filteredGoals"></goal-list>
    <goal-add @add-goal="addGoal"></goal-add>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

import GoalList from "./GoalList.vue";
import GoalAdd from "./GoalAdd.vue";

import type Goal from "@/types/Goal";

const goals = reactive<Goal[]>([]);

const filteredGoals = computed<Goal[]>(() => {
  return goals.filter(
    (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
  );
  return goals;
});

function addGoal(text: string) {
  const newGoal = {
    id: new Date().toISOString(),
    text: text,
  };
  goals.push(newGoal);
}
</script>
