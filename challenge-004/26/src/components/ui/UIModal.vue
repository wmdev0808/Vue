<script setup lang="ts">
defineProps<{ show: boolean }>()

const emit = defineEmits<{ (event: 'close'): void }>()
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  >
    <div v-if="show" class="fixed inset-0 bg-black/60 grid place-items-center">
      <div class="bg-white p-4 w-screen max-w-xl rounded-md">
        <div>
          <slot>default body</slot>
        </div>

        <footer class="border-t border-solid border-[#ddd] mt-4 pt-2 text-sm">
          <slot name="footer">
            <button
              @click="emit('close')"
              class="bg-[#ddd] py-1 px-3 rounded-3xl hover:bg-[#c8c8c8]"
            >
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>
