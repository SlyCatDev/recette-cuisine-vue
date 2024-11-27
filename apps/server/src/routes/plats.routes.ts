import { Router } from 'express';
import PlatsController from '../controllers/plats.controller';

const router = Router();

router.get('/api/plats', PlatsController.getAll);
router.get('/api/plats/:id', PlatsController.getById);
router.post('/api/plats', PlatsController.create);
router.put('/api/plats/:id', PlatsController.update);
router.delete('/api/plats/:id', PlatsController.delete);

export default router;