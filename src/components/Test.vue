<template>
  <!--  defineProps(["modelValue", "label", "type", "validationErrors", "errorName"]);-->
  <form @submit.prevent="submitForm">
    <TextInput
      v-model="name"
      :validation-errors="validationErrors"
      error-name="name"
      label="Name"
      type="text"
    />
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="submit">submit</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "@/components/form/TextInput.vue";

const name = ref("");
const validationErrors = ref({});
const submitForm = async () => {
  console.log(name.value);
};
</script>

<style scoped></style>
