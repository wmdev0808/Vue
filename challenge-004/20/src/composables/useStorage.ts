import { ref, watch } from 'vue'

export function useStorage(key: string, data: any = null) {
  const storedData = read()

  if (storedData) {
    data = ref(storedData)
  } else {
    data = ref(data)

    write()
  }

  watch(data, write, { deep: true })

  function read() {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }

    return null
  }

  function write() {
    if (data.value === null || data.value === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(data.value))
    }
  }

  return data
}
