"use strict";
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define(
    "customer",
    {
      full_name: DataTypes.STRING,
      username: { type: DataTypes.STRING, unique: true, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      phone_number: DataTypes.STRING,
    },
    {}
  );
  customer.associate = function (models) {
    customer.hasMany(models.order, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };
  return customer;
};
