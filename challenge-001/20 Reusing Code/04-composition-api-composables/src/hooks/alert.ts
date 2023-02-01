import { ref, type Ref } from "vue";

export default function useAlert(
  startingVisibility: boolean = false
): [Ref<boolean>, () => void, () => void] {
  const alertIsVisible = ref<boolean>(startingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
