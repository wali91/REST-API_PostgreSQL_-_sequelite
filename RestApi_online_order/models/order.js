"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      status: DataTypes.ENUM("accepted", "sending", "done", "failure"),
    },
    {}
  );
  order.associate = function (models) {
    order.hasMany(models.orderitem, {
      foreignKey: "order_id",
      as: "order_detail",
      onDelete: "CASCADE",
    });
    order.belongsTo(models.customer, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    order.belongsTo(models.driver, {
      foreignKey: "driver,id",
      onDelete: "CASCADE",
    });
  };
  return order;
};
