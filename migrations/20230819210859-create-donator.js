'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Donator', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      created_date: Sequelize.DATE,
      nickname: Sequelize.STRING,
      from_city: Sequelize.STRING,
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      note: Sequelize.STRING,
      status: {
        type: DataTypes.ENUM(
          'Completing',
          'Archival'
        ),
        allowNull: false
      },
      proposal_date: Sequelize.DATE
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Donator');
  }
};
