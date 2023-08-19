'use strict';

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
      post_index: Sequelize.INTEGER,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
  }
};
