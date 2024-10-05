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

  const PRICE_LARGE = 7.5;
  const PRICE_SMALL = 5.0;

  const largePotsQ = ref(0);
  const smallPotsQ = ref(0);

  const largePotsVal = ref(0);
  const smallPotsVal = ref(0);

  const increment = (product) => {
    if (product === "L") {
      largePotsQ++;
    } else if (product === "S") {
      smallPotsQ++;
    }
  };

  const decrement = (product) => {
    if (product === "L" && largePotsQ > 0) {
      largePotsQ++;
    } else if (product === "S" && smallPotsQ > 0) {
      smallPotsQ++;
    }
  };

  const updateValues = () => {
    largePotsVal = largePotsQ * PRICE_LARGE;
    smallPotsVal = smallPotsQ * PRICE_SMALL;
  }

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
  };
}
