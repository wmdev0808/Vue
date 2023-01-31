<template>
  <form>
    <input
      type="search"
      @input="search"
      :value="searchTerm"
      placeholder="Filter items"
    />
  </form>
</template>

<script setup lang="ts">
defineProps<{ searchTerm: string }>();
const emit = defineEmits<{ (e: "search", searchTerm: string): void }>();

function search(event: Event) {
  emit("search", (event.target! as HTMLInputElement).value);
}
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>
