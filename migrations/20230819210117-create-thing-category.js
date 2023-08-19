'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ThingCategory', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      category: Sequelize.STRING
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('ThingCategory');
  }
};