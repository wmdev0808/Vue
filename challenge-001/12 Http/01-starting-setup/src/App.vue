<template>
  <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <user-experiences :results="savedSurveyResults"></user-experiences>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type SurveyResult from "./types/SurveyResult";
import type Rating from "./types/Rating";

export default defineComponent({
  data() {
    return {
      savedSurveyResults: [] as SurveyResult[],
    };
  },
  methods: {
    storeSurvey(surveyData: { userName: string; rating: Rating }) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },
  },
});
</script>
<script setup lang="ts">
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";
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
</style>
