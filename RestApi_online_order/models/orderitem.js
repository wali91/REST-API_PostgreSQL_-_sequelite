"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderitem = sequelize.define(
    "orderitem",
    {
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    { timestamps: false }
  );

  orderitem.associate = function (models) {
    orderitem.belongsTo(models.order, {
      foreignKey: "order_id",
      onDelete: "CASCADE",
    });
    orderitem.belongsTo(models.product, {
      foreignKey: "product_id",
      onDelete: "CASCADE",
    });
  };
  return orderitem;
};
