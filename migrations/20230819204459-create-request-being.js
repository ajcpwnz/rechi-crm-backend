'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('RequestBeing', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      request_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'Requests'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: Sequelize.STRING,
      being_type: {
        type: DataTypes.ENUM('HUMAN', 'PET'),
        allowNull: false
      },
      being_sex: {
        type: DataTypes.ENUM('FEMALE', 'MALE'),
        allowNull: false
      },
      nickname: Sequelize.STRING,
      age: Sequelize.INTEGER,
      note: Sequelize.STRING
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('RequestBeing');
  }
};
