<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
export default {
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"] as CoachRequest[];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"] as boolean;
    },
  },
};
</script>

<script setup lang="ts">
import RequestItem from "@/components/requests/RequestItem.vue";
import type { CoachRequest } from "@/store/modules/requests";
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
