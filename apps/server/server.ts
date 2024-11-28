import express, { Application } from 'express';
import sequelize from './src/config/database.js';
import platsRoutes from './src/routes/plats.routes.js';

const app: Application = express();
const PORT = 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie à la base de données.');

    app.use(express.json());
    app.use('/api/plats', platsRoutes);

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur :', error);
  }
})();

