var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.json({
    message: " welcome to my order online"
  });
});

module.exports = router;
