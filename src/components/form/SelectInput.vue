<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <select
      :id="id"
      :class="validationErrors[errorName] ? 'is-invalid' : ''"
      :value="modelValue"
      aria-label="Default select example"
      class="form-select"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option selected value="">--- Select {{ label }} --</option>
      <option v-for="(item, index) in items" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
    <div v-if="validationErrors[errorName]" class="text-danger">
      {{ validationErrors[errorName] }}
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef

const id = Math.floor(Math.random() * 900000) + 100000;
defineProps(["modelValue", "label", "items", "validationErrors", "errorName"]);
</script>
<style lang="scss" scoped></style>
