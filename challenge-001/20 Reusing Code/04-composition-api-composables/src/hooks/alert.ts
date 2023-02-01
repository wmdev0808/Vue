import { ref, type Ref } from "vue";

export default function useAlert(): [Ref<boolean>, () => void, () => void] {
  const alertIsVisible = ref<boolean>(false);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
