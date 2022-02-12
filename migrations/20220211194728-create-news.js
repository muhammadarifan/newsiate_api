'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      newsCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      subTitle: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cover: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      content: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      isShow: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('News');
  }
};