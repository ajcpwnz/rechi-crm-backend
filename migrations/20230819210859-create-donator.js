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
      nickname: Sequelize.STRING,
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      proposal_date: Sequelize.DATE
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Donator');
  }
};
