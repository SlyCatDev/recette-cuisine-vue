'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recettes', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
    });

    await queryInterface.addIndex('recettes', {
      fields: ['nom'],
      type: 'FULLTEXT',
      name: 'recette_nom_search',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recettes');
  }
};