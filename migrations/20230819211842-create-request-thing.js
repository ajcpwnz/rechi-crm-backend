'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('RequestThing', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      request_being_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'RequestBeing'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      thing_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'ThingProduct'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      thing_size_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'ThingSize'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      completed: Sequelize.INTEGER,
      status: {
        type: DataTypes.ENUM(
          'Completing',
          'Archival'
        ),
        allowNull: false
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('RequestThing');
  }
};
