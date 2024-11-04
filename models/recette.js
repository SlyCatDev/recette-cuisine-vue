const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Recette = sequelize.define('Recette', {
  nom: { type: DataTypes.STRING, allowNull: false },
  ingredients: { type: DataTypes.TEXT },
  instructions: { type: DataTypes.TEXT }
});

module.exports = Recette;