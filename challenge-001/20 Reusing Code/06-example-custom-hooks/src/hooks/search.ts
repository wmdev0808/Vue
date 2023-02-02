import { computed, ref, type Ref, watch } from "vue";

export default function useSearch<T>(items: Ref<T[]>, searchProp: keyof T) {
  const enteredSearchTerm = ref<string>("");
  const activeSearchTerm = ref<string>("");

  const availableItems = computed<T[]>(function () {
    let filteredItems: T[] = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        (item[searchProp] as string).includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val: string) {
    enteredSearchTerm.value = val;
  }

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
