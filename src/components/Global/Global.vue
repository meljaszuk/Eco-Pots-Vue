<template>
  <div>
    <slot></slot>
  </div>
</template>

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
