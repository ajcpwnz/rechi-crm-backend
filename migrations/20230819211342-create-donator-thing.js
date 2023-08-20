'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('DonatorThing', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      donator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'Donator'
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
      status: {
        type: DataTypes.ENUM('COMPLETING', 'ARCHIVAL'),
        allowNull: false
      },
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      completed: Sequelize.INTEGER
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('DonatorThing');
  }
};
