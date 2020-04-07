const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const CONFIG = require("./config/database");

const customerRouter = require("./routes/api/v1/customer");
const driverRouter = require("./routes/api/v1/drivers");
const orderRouter = require("./routes/api/v1/orders");
const productRouter = require("./routes/api/v1/products");
const OrderItemRouter = require("./routes/api/v1/orderitems");

const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/driver", driverRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/orderitem", OrderItemRouter);

const db = require("./models");
db.sequelize.sync();

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my online order application." });
});

if (CONFIG.app === "dev") {
  // creates table if they do not already exist
  db.sequelize.sync();

  // deletes all tables then recreates them useful for testing and development purposes
  db.sequelize.sync({ force: true });
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
