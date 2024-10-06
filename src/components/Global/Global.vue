<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { useGlobalState } from "./globalState.js";

const {
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
} = useGlobalState();

provide("isCartOpen", isCartOpen);
provide("toggleCart", toggleCart);
provide("largePotsQ", largePotsQ);
provide("smallPotsQ", smallPotsQ);
provide("largePotsVal", largePotsVal);
provide("smallPotsVal", smallPotsVal);
provide("increment", increment);
provide("decrement", decrement);
provide("PRICE_LARGE", PRICE_LARGE);
provide("PRICE_SMALL", PRICE_SMALL);
provide("cartQ", cartQ);
provide("cartVal", cartVal);
</script>

<script>
export default {
  name: "Global",

  provide() {
    return {
      handleNotReady: this.handleNotReady.bind(this),
    };
  },
  methods: {
    handleNotReady() {
      alert("Feature has not been implemented!");
    },
  },
};
</script>
