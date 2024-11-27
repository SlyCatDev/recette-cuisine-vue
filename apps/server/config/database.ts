const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './apps/server/bdd/database.sqlite'
});

export default sequelize;