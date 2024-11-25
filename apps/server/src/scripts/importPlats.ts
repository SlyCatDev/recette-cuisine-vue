import Recette from '../models/plat.model';
import plats from '../data/plats.json'; // JSON avec `assert { type: 'json' }`

const importPlats = async () => {
  try {
    await Recette.sync({ force: true }); // Supprime et recrée la table
    for (const plat of plats.recettes) {
      await Recette.create({ nom: plat.nom });
    }
    console.log('Importation réussie.');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de l\'importation des plats :', error);
    process.exit(1);
  }
};

importPlats();
