module.exports = app => {
  const orderitem = require("../../../controllers/orderitems");

  const router = require("express").Router();

  //create a new orderitem dan all orderitem
  router.post("/", orderitem.create);
  router.get("/", orderitem.findAll);

  // search id update dan delete
  router.get("/:id", orderitem.findOne);
  router.put("/:id", orderitem.update);
  router.delete("/:id", orderitem.delete);

  // app.use("/api/v1/orderitem", router);
};
