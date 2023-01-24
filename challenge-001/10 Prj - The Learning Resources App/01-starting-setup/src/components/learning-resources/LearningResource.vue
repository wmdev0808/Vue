<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button :mode="ButtonMode.FLAT" @click="deleteResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  // props: ["id", "title", "description", "link"],
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  // inject: ["deleteResource"],
});
</script>

<script setup lang="ts">
import BaseCard from "../UI/BaseCard.vue";
import BaseButton, { ButtonMode } from "../UI/BaseButton.vue";

const deleteResource = inject("deleteResource") as (resId: string) => void;
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
