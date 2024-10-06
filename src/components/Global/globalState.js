import { ref, computed, onMounted, watch, onBeforeUnmount } from "vue";

export function useGlobalState() {
  const isCartOpen = ref(false);
  const isMenuOpen = ref(false);

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
    handleBCG();
  };

  const openSlideMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    handleBCG();
  };

  const handleBCG = () => {
    if (isMenuOpen.value || isCartOpen.value) {
      document.body.classList.add("locked");
    }

    if (!isMenuOpen.value && !isCartOpen.value) {
      document.body.classList.remove("locked");
    }

    console.log("menu", isMenuOpen.value, "cart", isCartOpen.value);
  };

  const PRICE_LARGE = 7.5;
  const PRICE_SMALL = 4.5;

  const largePotsQ = ref(1);
  const smallPotsQ = ref(0);

  onMounted(() => {
    const savedLargePotsQ = localStorage.getItem("largePotsQinLC");
    const savedSmallPotsQ = localStorage.getItem("smallPotsQinLC");

    if (savedLargePotsQ !== null) {
      largePotsQ.value = Number(savedLargePotsQ);
    }

    if (savedSmallPotsQ !== null) {
      smallPotsQ.value = Number(savedSmallPotsQ);
    }

    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth !== initialWidth.value) {
      location.reload();
    }
  };

  const largePotsVal = computed(() => largePotsQ.value * PRICE_LARGE);
  const smallPotsVal = computed(() => smallPotsQ.value * PRICE_SMALL);

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

  watch(largePotsQ, (newCount) => {
    localStorage.setItem("largePotsQinLC", newCount);
  });

  watch(smallPotsQ, (newCount) => {
    localStorage.setItem("smallPotsQinLC", newCount);
  });

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
    isMenuOpen,
    openSlideMenu,
  };
}
