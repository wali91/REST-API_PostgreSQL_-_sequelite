"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {}
  );
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.OrderItem, {
      foreignKey: "product_id",
      onDelete: "CASCADE"
    });
  };
  return Product;
};
