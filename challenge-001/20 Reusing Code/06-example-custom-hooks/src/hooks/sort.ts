import { ref, computed, type Ref } from "vue";

export default function useSort<T>(
  availableItems: Ref<T[]>,
  sortProperty: keyof T
) {
  const sorting = ref<"asc" | "desc" | null>(null);

  const sortedItems = computed<T[]>(function () {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((u1, u2) => {
      if (sorting.value === "asc" && u1[sortProperty] > u2[sortProperty]) {
        return 1;
      } else if (sorting.value === "asc") {
        return -1;
      } else if (
        sorting.value === "desc" &&
        u1[sortProperty] > u2[sortProperty]
      ) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode: "asc" | "desc") {
    sorting.value = mode;
  }

  return {
    sorting,
    sortedItems,
    sort,
  };
}
