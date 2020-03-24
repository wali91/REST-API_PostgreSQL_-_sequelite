"use strict";
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    "Driver",
    {
      full_name: DataTypes.STRING,
      phone_number: DataTypes.STRING
    },
    {}
  );
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};
