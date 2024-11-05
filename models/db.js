const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Fichier de base de données SQLite
});

module.exports = sequelize;