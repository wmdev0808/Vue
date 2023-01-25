<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button>Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating!"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type SurveyResultEntry from "@/types/SurveyResult";

export default defineComponent({
  props: {
    results: {
      type: Array<SurveyResultEntry>,
      default: [],
    },
  },
});
</script>

<script setup lang="ts">
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
import SurveyResult from "./SurveyResult.vue";
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
