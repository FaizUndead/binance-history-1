import { Router } from 'express';
import { getTradesHistory } from '../controllers/trades.controller';

const router = Router();

router.get('/', getTradesHistory);

export default router;
