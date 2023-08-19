'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ThingProduct', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      thing_category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'ThingCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product: Sequelize.STRING
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('ThingProduct');
  }
};
