import { reactive } from 'vue'

export const counter = reactive({
  // state
  count: 0,

  // action
  increment() {
    if (this.count >= 10) {
      return
    }

    this.count++
  }
})
