'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      created_date: Sequelize.DATE,
      actualization: Sequelize.DATE,
      nickname: Sequelize.STRING,
      from_city: Sequelize.STRING,
      for_who: Sequelize.STRING,
      nova_post: Sequelize.STRING,
      post_index: Sequelize.STRING,
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      status: {
        type: DataTypes.ENUM('COMPLETING', 'ARCHIVAL'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Requests');
  }
};
