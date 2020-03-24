module.exports = app => {
  const product = require("../controllers/products");

  const router = require("express").Router();

  //create a new product dan all product
  router
    .route("/")
    .post(product.create)
    .get(product.findAll);

  // search id update dan delete
  router
    .route("/:id")
    .get(product.findOne)
    .put(product.update)
    .delete(product.delete);

  // app.use("/api/v1/product", router);
};
