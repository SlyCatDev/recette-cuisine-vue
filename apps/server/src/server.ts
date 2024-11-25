import express, { Application } from 'express';
// import sequelize from './config/database';
import platsRoutes from './routes/plats.routes';

const app: Application = express();
const PORT = 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie à la base de données.');

    app.use(express.json());
    app.use(platsRoutes);

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur :', error);
  }
})();

