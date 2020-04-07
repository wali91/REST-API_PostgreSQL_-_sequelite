"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          full_name: "Nurislamiyati Zahra",
          username: "zahra89",
          email: "zahra@yahoomail.com",
          phone_number: "089875021944",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Burhanus Salim",
          username: "burhan90",
          email: "burhan@yahoomail.com",
          phone_number: "08349850134",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};
