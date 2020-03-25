"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "driver",
      [
        {
          full_name: "jhonedoe",
          phone_number: "08125674321",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: "jonathan tambunan",
          phone_number: "08135679802",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete("People", null, {});
  }
};
