import { Request, Response } from 'express';
import { analizeTradesHistory } from '../services/trades.service';

export const getTradesHistory = async (req: Request, res: Response): Promise<void> => {
  const { startTime, endTime } = req.query;
  console.log(startTime, endTime);

  const trades = await analizeTradesHistory();
  res.json({ success: true, data: [] });
};
