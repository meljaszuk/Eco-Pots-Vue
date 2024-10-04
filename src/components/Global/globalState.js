// globalState.js
import { ref } from "vue";

export function useGlobalState() {
  const isCartOpen = ref(false);

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
    console.log("cart toggled");
  };

  return {
    isCartOpen,
    toggleCart,
  };
}
