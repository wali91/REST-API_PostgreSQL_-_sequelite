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
      "customer",
      [
        {
          full_name: "johny",
          username: "doe",
          email: "john@doe.com",
          phone_number: "0812345689",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: "johny",
          username: "doe",
          email: "john@doe.com",
          phone_number: "0812345689",
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
