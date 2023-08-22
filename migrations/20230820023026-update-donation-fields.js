'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn('DonatorThing', 'status');
    await queryInterface.removeColumn('DonatorThing', 'name');
    await queryInterface.removeColumn('DonatorThing', 'note');
    await queryInterface.renameColumn('DonatorThing', 'thing_product_id', 'product_id');
    await queryInterface.renameColumn('DonatorThing', 'donate_id', 'donator_id');
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.createColumn('DonatorThing', 'status', {
        type: DataTypes.ENUM('COMPLETING', 'ARCHIVAL'),
        allowNull: false
      });
      await queryInterface.createColumn('DonatorThing', 'name', Sequelize.STRING);
      await queryInterface.removeColumn('DonatorThing', 'note');
      await queryInterface.renameColumn('DonatorThing', 'product_id', 'thing_product_id');
      await queryInterface.renameColumn('DonatorThing', 'donator_id', 'donate_id');
  }
};
