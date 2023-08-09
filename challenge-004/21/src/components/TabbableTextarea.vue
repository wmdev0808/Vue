<script setup lang="ts">
defineProps<{ modelValue: string }>()

const emit = defineEmits<{ (event: 'update:modelValue', value: string): void }>()

function onTabPress(e: KeyboardEvent) {
  let textarea = e.target! as HTMLTextAreaElement
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd
  textarea.value = val.substring(0, start) + '\t' + val.substring(end)
  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', ($event.target! as HTMLTextAreaElement).value)"
    v-text="modelValue"
  />
</template>
