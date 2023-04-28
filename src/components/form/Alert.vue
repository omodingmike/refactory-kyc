<template>
  <div
    :class="type"
    class="alert alert-dismissible fade show mt-2"
    role="alert"
  >
    <strong>{{ title }} </strong> {{ message }}.
    <button
      aria-label="Close"
      class="btn-close"
      data-bs-dismiss="alert"
      type="button"
    ></button>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    type: String,
    title: String,
    message: String,
  },
};
</script>

<style scoped></style>
