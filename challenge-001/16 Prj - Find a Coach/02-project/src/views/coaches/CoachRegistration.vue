<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    saveData(data: Omit<Coach, "id">) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
});
</script>

<script setup lang="ts">
import CoachForm from "@/components/coaches/CoachForm.vue";
import type { Coach } from "@/store/modules/coaches";
</script>
