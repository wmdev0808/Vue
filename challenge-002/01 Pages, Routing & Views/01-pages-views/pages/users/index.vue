<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script setup lang="ts">
const userId = ref("");
// const router = useRouter();

async function onLoadUser() {
  // router.push("/users/" + userId.value);
  await navigateTo("/users/" + userId.value);
}
</script>
