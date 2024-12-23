import { DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { Model } from 'sequelize-typescript';

/*abstract class Employe {
  public num_emp! : string;
  public login!: string;

  public embauche(){
    //....
  }
}

class Directeur extends Employe implements UserAppliFront,UserAppliBack {
  public plaque_immitriculation!: string;
  public password!:string; 

  // implement UserAppliFront
  public authentification(): boolean {
    return true;
  }
  public addToAppliBack(): boolean {
    return true;
  }
  public addToAppliFront(): boolean {
    return true;
  }
  
  public faire_virement() {
    //.....
  }
}

class Developpeur extends Employe implements UserAppliFront{
  public language_prefere!: string;
  public password!:string; 

  //implements
  public authentification(): boolean{
    return true;
  }
  public addToAppliFront(): boolean{
    return true;
  }

  public pisser_du_code(){
    //.... 
  }
}

class Secretaire extends Employe {
  public couleur_de_cheveux!: string;

  public password!: string;
  public login!: string;
  
  public authentification(): boolean {
    // if .....
    return true;
  }

  public addToAppliFront(): boolean {
    return true;
  }

  public repondre_au_tel() {
    //.... 
  }
}


const clement = new Directeur();
clement.password= 'toto';
clement.embauche();
clement.faire_virement();

const anne = new Secretaire(); 
anne.repondre_au_tel();

//const sylvain = new Employe();
const sylvain = new Developpeur();
sylvain.pisser_du_code();
const kevin = new Developpeur();
kevin.pisser_du_code();

///////////////////////////////////
abstract class UserAppliFront {
  public password!:string;
  public login!:string;
  
  public authentification(): boolean{
    // if .....
    return true;
  }

} 
abstract class UserAppliBack {
  public password!:string;
  public login!:string;
  
  public authentification(): boolean {
    // if .....
    return true;
  }
} 

interface UserAppliFront {
  login: string;
  password: string;
  
  authentification(): boolean;
  addToAppliFront(): boolean;

} 
interface UserAppliBack {
  login: string;
  password: string;
  
  authentification(): boolean;
  addToAppliFront(): boolean;

} 

function ajouter_user_front(userToAdd: UserAppliFront) {
  userToAdd.addToAppliFront();
  // envoie un mail
}

ajouter_user_front(clement);
ajouter_user_front(anne);

*/


// Modèle Sequelize
class Plat extends Model {
  declare id: number;
  declare nom: string;
  static init: any;
}

Plat.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom ne peut pas être vide" },
        len: {
          args: [3, 100],
          msg: "Le nom doit contenir entre 3 et 100 caractères"
        }
      },
      unique: { // Ajoute un index unique sur le nom
        name: 'recette_nom_unique',
        msg: 'Ce nom de recette existe déjà'
      }
    },
  },
  {
    sequelize,
    modelName: "recette",
    timestamps: false,
    indexes: [
      {
        name: 'recette_nom_search',
        fields: ['nom'],
        type: 'FULLTEXT'
      }
    ],
  }
);

export default Plat;
