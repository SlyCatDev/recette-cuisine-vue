import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db'; // Assure-toi que `db` exporte l'instance configurée de Sequelize

// Définir les types pour le modèle Recette
interface RecetteAttributes {
  id: number;
  nom: string;
  ingredients: string;
  instructions: string;
}

// Permettre que certains attributs soient optionnels lors de la création d'une nouvelle instance
interface RecetteCreationAttributes extends Optional<RecetteAttributes, 'id'> {}

// Définition du modèle Recette
class Recette extends Model<RecetteAttributes, RecetteCreationAttributes> implements RecetteAttributes {
  public id!: number;
  public nom!: string;
  public ingredients!: string;
  public instructions!: string;
}

// Initialiser le modèle avec Sequelize
Recette.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize, // L'instance Sequelize
    tableName: 'recettes', // Nom de la table
  }
);

export default Recette;
