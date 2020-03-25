var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var CONFIG = require("./config/database");

const indexRouter = require("./routes/api/v1/index");
const customerRouter = require("./routes/api/v1/customers");
const driverRouter = require("./routes/api/v1/drivers");
const orderRouter = require("./routes/api/v1/orders");
const productRouter = require("./routes/api/v1/products");
const OrderItemRouter = require("./routes/api/v1/orderitems");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", indexRouter);
app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/driver", driverRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/orderitem", OrderItemRouter);

const db = require("./sequelite_database/models");
db.sequelize.sync({ force: true });

module.exports = app;
