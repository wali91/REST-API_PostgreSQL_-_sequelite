module.exports = app => {
  const order = require("../controllers/orders");

  const router = require("express").Router();

  //create a new order dan all order
  router
    .route("/")
    .post(order.create)
    .get(order.findAll);

  router
    .route("/:id")
    .get(order.findOne)
    .put(order.update)
    .delete(order.delete);

  // app.use("/api/v1/order", router);
};
