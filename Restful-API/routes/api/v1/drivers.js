module.exports = app => {
  const driver = require("../../../controllers/drivers");

  const router = require("express").Router();

  //create a new driver & all driver
  router.post("/", driver.create);
  router.get("/", driver.findAll);

  // search driver update dan delete
  router.get("/:id", driver.findOne);
  router.put("/:id", driver.update);
  router.delete("/:id", driver.delete);

  // app.use("/api/v1/driver", router);
};
