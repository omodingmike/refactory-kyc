const mongoose = require("mongoose");
const {
  isValidPhoneNumber,
  isValidEmail,
  isValidName,
} = require("../Validator");
const Validator = require("../Validator");
const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minlength: [2, "Firstname should be at least 2 characters"],
      maxlength: [255, "Firstname should be at least 255 characters"],
      required: [true, "Firstname is required"],
      validate: {
        validator: function (v) {
          return isValidName(v);
        },
        message: `Firstname should not contain numbers`,
      },
    },
    lastName: {
      type: String,
      trim: true,
      minlength: [2, "Lastname should be at least 2 characters"],
      maxlength: [255, "Lastname should be at least 255 characters"],
      required: [true, "Lastname is required"],
      validate: {
        validator: function (v) {
          return isValidName(v);
        },
        message: `Lastname should not contain numbers`,
      },
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
      validate: {
        validator: function (v) {
          return Validator.youngerThan10Years(v);
        },
        message: "You should be at least 18 years old",
      },
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: [true, "Gender is required"],
    },

    phone1: {
      type: String,
      trim: true,
      unique: [true, "Phone1 already taken"],
      validate: {
        validator: function (v) {
          return isValidPhoneNumber(v);
        },
        message: `Phone1 number is invalid`,
      },
      required: [true, "Phone1 number is required"],
    },
    phone2: {
      type: String,
      trim: true,
      unique: true,
      validate: {
        validator: function (v) {
          return isValidPhoneNumber(v);
        },
        message: `Phone2 number is invalid`,
      },
      required: [true, "Phone2 number is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is invalid"],
      unique: [true, "Email already taken"],
      validate: {
        validator: function (email) {
          return isValidEmail(email);
        },
        message: `Email is invalid`,
      },
    },
    country: {
      type: String,
      trim: true,
      required: [true, "Country is  required"],
    },
    state: {
      type: String,
      trim: true,
      required: [true, "State/District is  required"],
    },
    town: {
      type: String,
      trim: true,
      required: [true, "Town is  required"],
    },
    zip: {
      type: String,
      trim: true,
      required: [true, "Zip code is  required"],
    },
  },
  {
    timestamps: true,
  }
);
// usernameExists(customerSchema);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
