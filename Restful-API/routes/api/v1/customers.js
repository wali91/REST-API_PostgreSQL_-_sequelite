const customer = require("../../../controllers/customers");

const router = require("express").Router();

// const driverController = require("../controllers").drivers;
// const orderitemController = require("../controllers").orderitems;
// const orderController = require("../controllers").orders;
// const productController = require("../controllers").products;

//create a new user & all customer
router.get("/", customer.findAll);
router.post("/", customer.create);

// get id update dan delete
router.get("/:id", customer.findOne);
router.put("/:id", customer.update);
router.delete("/:id", customer.delete);

module.exports = router;
