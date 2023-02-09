<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script setup lang="ts">
const userId = ref("");
const router = useRouter();

function onLoadUser() {
  router.push("/users/" + userId.value);
}
</script>
