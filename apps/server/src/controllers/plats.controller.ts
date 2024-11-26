import { Request, Response } from 'express';
import PlatsService from '../services/plats.service';

class PlatsController {
  async getAll(req: Request, res: Response) {
    try {
      const plats = await PlatsService.listPlats();
      res.json(plats);
    } catch (error : any) {
      res.status(500).json({ error: error.message });
    }
  }

  // récupérer un plat via son Id
  async getById(req: Request, res: Response) {
    try {
      const plat = await PlatsService.getPlat(Number(req.params.id));
      res.json(plat);
    } catch (error : any) {
      res.status(404).json({ error : error.message });
    }
  }
  // ajoute un plat
  async create(req: Request, res: Response) {
    try {
      const plat = await PlatsService.addPlat(req.body.nom);
      res.status(201).json(plat);
    } catch (error : any) {
      res.status(400).json({ error: error.message });
    }
  }
  // modification du plat 
  async update(req: Request, res: Response) {
    try {
      const plat = await PlatsService.editPlat(Number(req.params.id), req.body.nom);
      res.json(plat);
    } catch (error : any) {
      res.status(400).json({ error: error.message });
    }
  }
  // supprime un plat
  async delete(req: Request, res: Response) {
    try {
      await PlatsService.removePlat(Number(req.params.id));
      res.status(204).send();
    } catch (error : any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new PlatsController();
