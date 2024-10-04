<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { useGlobalState } from "./globalState.js"; // Zaimportuj globalny stan

// Uzyskaj globalny stan i funkcję toggle
const { isCartOpen, toggleCart } = useGlobalState();

// Udostępnij stan globalny za pomocą provide
provide("isCartOpen", isCartOpen);
provide("toggleCart", toggleCart);
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
