import express, { json } from 'express';

const app = express();
const PORT = 3000;

app.use(json()); // Pour gérer les données JSON

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});

// Route gestion recettes
import { findAll, create } from './models/config/recette';

// Route pour récupérer toutes les recettes
app.get('/recettes', async (req, res) => {
  const recettes = await findAll();
  res.json(recettes);
});

// Route pour ajouter une nouvelle recette
app.post('/recettes', async (req, res) => {
  const recette = await create(req.body);
  res.json(recette);
});
