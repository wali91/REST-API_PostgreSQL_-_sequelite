"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      user_id: DataTypes.INTEGER,
      driver_id: DataTypes.INTEGER,
      order_detail: DataTypes.STRING
    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
