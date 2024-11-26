import sequelize from './database.js';// Ajustez le chemin en fonction de la structure de votre projet

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
