import PlatsRepository from '../plats.repository';

class PlatsService {
  // Logique métier pour récupérer tous les plats
  async listPlats() {
    return PlatsRepository.getAllPlats();
  }

  // Logique métier pour récupérer un plat
  async getPlat(id: number) {
    const plat = await PlatsRepository.getPlatById(id);
    if (!plat) throw new Error('Plat introuvable');
    return plat;
  }

  // Logique métier pour ajouter un plat
  async addPlat(nom: string) {
    if (!nom.trim()) throw new Error('Le nom du plat est requis');
    return PlatsRepository.createPlat(nom);
  }

  // Logique métier pour mettre à jour un plat
  async editPlat(id: number, nom: string) {
    if (!nom.trim()) throw new Error('Le nom du plat est requis');
    const plat = await PlatsRepository.updatePlat(id, nom);
    if (!plat) throw new Error('Plat introuvable');
    return plat;
  }

  // Logique métier pour supprimer un plat
  async removePlat(id: number) {
    const success = await PlatsRepository.deletePlat(id);
    if (!success) throw new Error('Impossible de supprimer le plat');
    return success;
  }
}

export default new PlatsService();

