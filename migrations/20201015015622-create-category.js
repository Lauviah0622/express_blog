'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false 
      }
    }, {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci" 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};