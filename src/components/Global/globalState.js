// globalState.js
import { ref } from "vue";

export function useGlobalState() {
  const isCartOpen = ref(false);

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;

    if (isCartOpen.value) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  };

  return {
    isCartOpen,
    toggleCart,
  };
}
