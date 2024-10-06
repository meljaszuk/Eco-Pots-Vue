import { ref, computed } from "vue";

export function useGlobalState() {
  const isCartOpen = ref(false);

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
    document.body.classList.toggle("locked", isCartOpen.value);
  };

  const PRICE_LARGE = 7.5;
  const PRICE_SMALL = 4.5;

  const largePotsQ = ref(1);
  const smallPotsQ = ref(1);

  // Computed properties for values based on pot quantities
  const largePotsVal = computed(() => largePotsQ.value * PRICE_LARGE);
  const smallPotsVal = computed(() => smallPotsQ.value * PRICE_SMALL);

  // Total quantities and values
  const cartQ = computed(() => largePotsQ.value + smallPotsQ.value);
  const cartVal = computed(() => largePotsVal.value + smallPotsVal.value);

  const increment = (product) => {
    if (product === "L") {
      largePotsQ.value++;
    } else if (product === "S") {
      smallPotsQ.value++;
    }
  };

  const decrement = (product) => {
    if (product === "L" && largePotsQ.value > 0) {
      largePotsQ.value--;
    } else if (product === "S" && smallPotsQ.value > 0) {
      smallPotsQ.value--;
    }
  };

  return {
    isCartOpen,
    toggleCart,
    largePotsQ,
    smallPotsQ,
    largePotsVal,
    smallPotsVal,
    increment,
    decrement,
    PRICE_LARGE,
    PRICE_SMALL,
    cartVal,
    cartQ,
  };
}
