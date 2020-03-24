var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("./routes/index");
require("./routes/customers")(app);
require("./routes/drivers")(app);
require("./routes/orders")(app);
require("./routes/products")(app);
require("./routes/orderitems")(app);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/", indexRouter);
// app.use("/customer", customerRouter);
// app.use("/order", orderRouter);
// app.use("/driver", driverRouter);
// app.use("/product", productRouter);
// app.use("/orderitem", OrderItemRouter);

const db = require("./models");
db.sequelize.sync({ force: true });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
