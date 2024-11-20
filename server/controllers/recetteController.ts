import { Request, Response } from 'express';
import Recette from '../models/Recette';

// Créer une nouvelle recette
export const nouvelleRecette = async (req: Request, res: Response) => {
  try {
    const recette = await Recette.create(req.body);
    res.status(201).json(recette);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la recette', error });
  }
};

// Lire toutes les recettes
export const obtenirToutesLesRecettes = async (req: Request, res: Response) => {
  try {
    const recettes = await Recette.findAll();
    res.status(200).json(recettes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes', error });
  }
};

// Lire une recette par ID
export const obtenirRecetteParId = async (req: Request, res: Response) => {
  try {
    const recette = await Recette.findByPk(req.params.id);
    if (recette) {
      res.status(200).json(recette);
    } else {
      res.status(404).json({ message: 'Recette non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la recette', error });
  }
};

// Mettre à jour une recette
export const mettreAJourRecette = async (req: Request, res: Response) => {
  try {
    const recette = await Recette.findByPk(req.params.id);
    if (recette) {
      await recette.update(req.body);
      res.status(200).json(recette);
    } else {
      res.status(404).json({ message: 'Recette non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la recette', error });
  }
};

// Supprimer une recette
export const supprimerRecette = async (req: Request, res: Response) => {
  try {
    const recette = await Recette.findByPk(req.params.id);
    if (recette) {
      await recette.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Recette non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la recette', error });
  }
};
