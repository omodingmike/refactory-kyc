const Validator = require("../Validator");
const Customer = require("../models/Customer");

module.exports = {
  store: async (request, response, next) => {
    console.log(request.body);
    // const { firstName, lastName, dob, gender } = request.body.bioData;
    // const { country, state, town, zip } = request.body.location;
    // const { phone1, phone2, email } = request.body.contact;
    try {
      const customer = await Customer.create(request.body);
      response.json({
        status: "success",
        data: customer,
      });
    } catch (error) {
      next({
        message: Validator.getMongooseValidationErrors(error),
        statusCode: 422,
      });
    }
  },
};
