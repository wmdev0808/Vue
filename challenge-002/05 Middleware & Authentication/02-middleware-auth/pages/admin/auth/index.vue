<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/root";

definePageMeta({
  layout: "admin",
});

const config = useRuntimeConfig();
const rootStore = useRootStore();

const isLogin = ref(true);
const email = ref("");
const password = ref("");

function onSubmit() {
  rootStore
    .authenticateUser({
      isLogin: isLogin.value,
      email: email.value,
      password: password.value,
    })
    .then(() => {
      navigateTo("/admin");
    });
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
