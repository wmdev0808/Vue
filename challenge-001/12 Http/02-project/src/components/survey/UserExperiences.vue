<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
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
  data() {
    return {
      results: [] as SurveyResultEntry[],
      isLoading: false,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;

      fetch(`${import.meta.env.VITE_DB_BASE_URL}/surveys.json`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        });
    },
  },
  mounted() {
    this.loadExperiences();
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
