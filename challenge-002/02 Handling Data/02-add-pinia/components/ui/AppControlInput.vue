<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
    ></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps({
  controlType: {
    type: String,
    default: "input",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>
