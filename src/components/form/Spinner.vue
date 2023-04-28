<template>
  <div class="text-center text-primary">
    <div class="spinner-border" role="successful"></div>
  </div>
</template>

<script>
export default {
  name: "SpinnerComponent",
  props: {
    showProgress: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
