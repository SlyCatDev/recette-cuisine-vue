import express, { Request, Response } from 'express';
import sequelize from 'sequelize';
import Recette from './recette';

const app = express();
app.use(express.json());

// Synchronisation avec la base de données
sequelize.sync({ force: true }).then(() => {
  console.log("Base de données synchronisée");
});

// Route pour ajouter une recette
app.post('/recettes', async (req: Request, res: Response) => {
  const { nom, description } = req.body;
  try {
    const recette = await Recette.create({ nom, description });
    res.json(recette);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la recette' });
  }
});

// Lancer le serveur
app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
