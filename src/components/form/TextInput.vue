<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :class="validationErrors[errorName] ? 'is-invalid' : ''"
      :type="type"
      :value="modelValue"
      class="form-control"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <div v-if="validationErrors[errorName]" class="text-danger">
      {{ validationErrors[errorName] }}
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef

const id = Math.floor(Math.random() * 900000) + 100000;
defineProps(["modelValue", "label", "type", "validationErrors", "errorName"]);
</script>
<style lang="scss" scoped></style>
