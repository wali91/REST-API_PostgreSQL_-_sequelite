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
      "order",
      [
        {
          user_id: "1",
          driver_id: "1",
          order_detail: [
            {
              product_id: 1,
              quantity: 1
            },
            {
              product_id: 2,
              quantity: 2
            },
            {
              product_id: 3,
              quantity: 3
            }
          ]
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
