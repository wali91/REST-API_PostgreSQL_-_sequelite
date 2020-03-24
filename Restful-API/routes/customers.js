module.exports = app => {
  const customer = require("../controllers/customers");

  const router = require("express").Router();

  //create a new user & all customer
  router
    .route("/")
    .post(customer.create)
    .get(customer.findAll);

  // get id update dan delete
  router
    .route("/:id")
    .get(customer.findOne)
    .put(customer.update)
    .delete(customer.delete);

  // app.route("/api/v1/customer", router);
};
