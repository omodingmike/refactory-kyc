const express = require("express");
const { store } = require("../controllers/CustomerController");
const customerRoutes = express.Router();
customerRoutes.post("/", store);
module.exports = customerRoutes;
