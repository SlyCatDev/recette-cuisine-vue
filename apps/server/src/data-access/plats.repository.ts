import Plat from '../models/plat.model';

class PlatsRepository {
  // Récupère tous les plats
  async getAllPlats(): Promise<Plat[]> {
    return Plat.findAll();
  }

  // Récupère un plat par son ID
  async getPlatById(id: number): Promise<Plat | null> {
    return Plat.findByPk(id);
  }

  // Crée un nouveau plat
  async createPlat(nom: string): Promise<Plat> {
    return Plat.create({ nom });
  }

  // Met à jour un plat
  async updatePlat(id: number, nom: string): Promise<Plat | null> {
    const plat = await Plat.findByPk(id);
    if (!plat) return null;
    return plat.update({ nom });
  }

  // Supprime un plat
  async deletePlat(id: number): Promise<boolean> {
    const deleted = await Plat.destroy({ where: { id } });
    return deleted > 0;
  }
}

export default new PlatsRepository();
