<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height">
      <div class="bg-dark">
        <h1 class="text-center p-3" style="color: white">GENQ KYC FORM</h1>
      </div>
      <h4 class="text-start mt-3">Bio Data</h4>
      <hr class="bg-dark" style="width: 20px" />
      <alert-component
        v-if="successful"
        message="Farmer has been Submitted Successfully"
        title="Success."
        type="alert-success"
      />
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col">
            <TextInput
              v-model="bioData.firstName"
              :validation-errors="validationErrors"
              error-name="firstName"
              label="Firstname"
            />
          </div>

          <div class="col">
            <TextInput
              v-model="bioData.lastName"
              :validation-errors="validationErrors"
              error-name="lastName"
              label="LastName"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <TextInput
              v-model="bioData.dob"
              :validation-errors="validationErrors"
              error-name="dob"
              label="Date of Birth"
              type="date"
            />
          </div>
          <div class="col">
            <SelectInput
              v-model="bioData.gender"
              :items="genders"
              :validation-errors="validationErrors"
              error-name="gender"
              label="Gender"
            />
          </div>
        </div>
        <h4 class="text-start">Location</h4>
        <hr />
        <div class="row">
          <div class="col">
            <SelectInput
              v-model="location.country"
              :items="countries"
              :validation-errors="validationErrors"
              error-name="country"
              label="Country"
            />
          </div>
          <div class="col">
            <TextInput
              v-model="location.state"
              :validation-errors="validationErrors"
              error-name="state"
              label="State / District"
              type="text"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <TextInput
              v-model="location.town"
              :validation-errors="validationErrors"
              error-name="town"
              label="Town"
              type="text"
            />
          </div>
          <div class="col">
            <TextInput
              v-model="location.zip"
              :validation-errors="validationErrors"
              error-name="zip"
              label="Zip Code"
              type="text"
            />
          </div>
        </div>
        <h4>Contact and address</h4>
        <hr />
        <div class="row">
          <div class="col">
            <TextInput
              v-model="contact.phone1"
              :validation-errors="validationErrors"
              error-name="phone1"
              label="Phone Number 1"
              type="tel"
            />
          </div>
          <div class="col">
            <TextInput
              v-model="contact.phone2"
              :validation-errors="validationErrors"
              error-name="phone2"
              label="Phone Number 2"
              type="tel"
            />
          </div>
        </div>
        <div class="row">
          <TextInput
            v-model="contact.email"
            :validation-errors="validationErrors"
            error-name="email"
            label="Email"
            type="email"
          />
        </div>
        <div v-if="showSubmit" class="row">
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="submit">submit</button>
          </div>
        </div>
      </form>
      <SpinnerComponent v-if="showProgress" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import SpinnerComponent from "@/components/form/Spinner.vue";
import AlertComponent from "@/components/form/Alert.vue";
import TextInput from "@/components/form/TextInput.vue";
import SelectInput from "@/components/form/SelectInput.vue";

const formData = ref({});
const showProgress = ref(false);
const successful = ref(false);
const showSubmit = ref(true);

const bioData = ref({});
const location = ref({});
const contact = ref({});

const validationErrors = ref({});
const countries = [
  "Tanzania",
  "Kenya",
  "Uganda",
  "Rwanda",
  "Burundi",
  "Democratic Republic of Congo",
  "South Sudan",
];
const genders = ["Male", "Female"];
const submitForm = async () => {
  const url = "http://127.0.0.1:9000/api/v1/customers";
  showProgress.value = true;
  showSubmit.value = false;
  formData.value = Object.assign(
    {},
    bioData.value,
    location.value,
    contact.value
  );

  try {
    const response = await axios.post(url, formData.value);
    showProgress.value = false;
    showSubmit.value = true;
    if (response.status === 200) {
      successful.value = true;
      validationErrors.value = {};
      formData.value = {};
    }
  } catch (error) {
    validationErrors.value = error.response.data.message;
    showProgress.value = false;
    showSubmit.value = true;
  }
};
</script>
