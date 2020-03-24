module.exports = app => {
  const orderitem = require("../controllers/orderitems");

  const router = require("express").Router();

  //create a new orderitem dan all orderitem
  router
    .route("/")
    .post(orderitem.create)
    .get(orderitem.findAll);

  // search id update dan delete
  router
    .route("/:id")
    .get(orderitem.findOne)
    .put(orderitem.update)
    .delete(orderitem.delete);

  // app.use("/api/v1/orderitem", router);
};
