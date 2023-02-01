<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UserAlert from "./UserAlert.vue";
import alertMixin from "@/mixins/alert";

export default defineComponent({
  components: {
    UserAlert,
  },
  // data() {
  //   return {
  //     alertIsVisible: false,
  //   };
  // },
  // methods: {
  //   showAlert() {
  //     this.alertIsVisible = true;
  //   },
  //   hideAlert() {
  //     this.alertIsVisible = false;
  //   },
  // },
  mixins: [alertMixin],
});
</script>
