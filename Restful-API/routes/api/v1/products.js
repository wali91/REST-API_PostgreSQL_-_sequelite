module.exports = app => {
  const product = require("../../../controllers/products");

  const router = require("express").Router();

  //create a new product dan all product
  router.post("/", product.create);
  router.get("/", product.findAll);

  // search id update dan delete
  router.get("/:id", product.findOne);
  router.put("/:id", product.update);
  router.delete("/:id", product.delete);

  // app.use("/api/v1/product", router);
};
