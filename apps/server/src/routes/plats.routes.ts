import { Router } from 'express';
import PlatsController from '../controllers/plats.controller';

const router = Router();

router.get('/', PlatsController.getAll);
router.get('/:id', PlatsController.getById);
router.post('/', PlatsController.create);
router.put('/:id', PlatsController.update);
router.delete('/:id', PlatsController.delete);

export default router;