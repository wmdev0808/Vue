import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   // data
//   state() {
//     return {
//       count: 5
//     }
//   },

//   // methods
//   actions: {
//     increment() {
//       if (this.count < 10) {
//         this.count++
//       }
//     }
//   },

//   // computed
//   getters: {
//     remaining(): number {
//       return 10 - this.count
//     }
//   }
// })

export const useCounterStore = defineStore('counter', () => {
  const count = ref(5)
  const remaining = computed(() => 10 - count.value)
  function increment() {
    if (count.value < 10) {
      count.value++
    }
  }

  return { count, remaining, increment }
})
