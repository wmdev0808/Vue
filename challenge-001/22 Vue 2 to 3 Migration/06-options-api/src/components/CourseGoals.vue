<template>
  <div>
    <goal-list :goals="filteredGoals"></goal-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import GoalList from "./GoalList.vue";
import AddGoal from "./AddGoal.vue";
import type Goal from "@/types/Goal";

export default defineComponent({
  components: {
    GoalList,
    AddGoal,
  },
  data() {
    return {
      goals: [] as Goal[],
    };
  },
  computed: {
    filteredGoals() {
      return this.goals.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      );
    },
  },
  methods: {
    addGoal(text: string) {
      const newGoal = {
        id: new Date().toISOString(),
        text,
      };
      this.goals.push(newGoal);
    },
  },
});
</script>
