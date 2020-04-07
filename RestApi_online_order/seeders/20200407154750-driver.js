"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "drivers",
      [
        {
          full_name: "Sogi waluyo kusumo",
          phone_number: "08940195642",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Agus Salim",
          phone_number: "08305598189",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("drivers", null, {});
  },
};
