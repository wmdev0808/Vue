<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          v-model="enteredName"
        />
      </div>
      <div>
        <label for="age">Age: </label>
        <input
          type="text"
          id="age"
          placeholder="Your age"
          v-model="enteredAge"
        />
      </div>
      <div>
        <button>Set User Data</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
