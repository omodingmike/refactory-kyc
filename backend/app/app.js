const cors = require("cors");
// const userRouter = require("../endpoints/userRoutes");
const customerRoutes = require("../endpoints/customerRoutes");

const express = require("express");
const { handleErrors, notFound } = require("../middlewares/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/customers/", customerRoutes);

//Not found
app.use(notFound);
//Error handler
app.use(handleErrors);

module.exports = app;
