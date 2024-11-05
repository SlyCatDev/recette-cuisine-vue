import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './db'; // Assure-toi que `db` exporte l'instance configurée de Sequelize

// Définir les types pour le modèle Recette
interface RecetteAttributes {
  id: number;
  nom: string;
  ingredients: string;
  instructions: string;
}

// Permettre que certains attributs soient optionnels lors de la création d'une nouvelle instance
interface RecetteCreationAttributes extends Optional<RecetteAttributes, 'id'> {}

// Définir le modèle avec les types
class Recette extends Model<RecetteAttributes, RecetteCreationAttributes> implements RecetteAttributes {
  static create(arg0: { nom: any; description: any; }) {
    throw new Error('Method not implemented.');
  }
  static init(arg0: { id: { type: any; autoIncrement: boolean; primaryKey: boolean; }; nom: { type: any; allowNull: boolean; }; ingredients: { type: any; allowNull: boolean; }; instructions: { type: any; allowNull: boolean; }; }, arg1: {
    sequelize: any; // L'instance Sequelize
    tableName: string;
  }) {
    throw new Error('Method not implemented.');
  }
  public id!: number;
  public nom!: string;
  public ingredients!: string;
  public instructions!: string;
}

// Initialiser le modèle avec Sequelize
Recette.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
