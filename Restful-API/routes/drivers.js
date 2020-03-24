module.exports = app => {
  const driver = require("../controllers/drivers");

  const router = require("express").Router();

  //create a new driver & all driver
  router
    .route("/")
    .post(driver.create)
    .get(driver.findAll);

  // search driver update dan delete
  router
    .route("/:id")
    .get(driver.findOne)
    .put(driver.update)
    .delete(driver.delete);

  // app.use("/api/v1/driver", router);
};
