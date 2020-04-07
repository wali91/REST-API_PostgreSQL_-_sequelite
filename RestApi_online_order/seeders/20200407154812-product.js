"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "HP Samsung S11",
          price: 1295000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HP Apple 7",
          price: 1500000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
