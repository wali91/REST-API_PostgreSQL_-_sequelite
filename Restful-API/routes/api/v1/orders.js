module.exports = app => {
  const order = require("../../../controllers/orders");

  const router = require("express").Router();

  //create a new order dan all order
  router.post("/", order.create);
  router.get("/", order.findAll);

  router.get("/:id", order.findOne);
  router.put("/:id", order.update);
  router.delete("/:id", order.delete);

  // app.use("/api/v1/order", router);
};
