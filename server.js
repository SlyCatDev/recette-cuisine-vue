const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Pour gérer les données JSON

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});

// routes gestion recette

const Recette = require('./models/recette');

// Route pour récupérer toutes les recettes
app.get('/recettes', async (req, res) => {
  const recettes = await Recette.findAll();
  res.json(recettes);
});

// Route pour ajouter une nouvelle recette
app.post('/recettes', async (req, res) => {
  const recette = await Recette.create(req.body);
  res.json(recette);
});
