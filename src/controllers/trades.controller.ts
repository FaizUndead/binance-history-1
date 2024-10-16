import { Request, Response } from 'express';
import { analizeTradesHistory } from '../services/trades.service';

export const getTradesHistory = async (req: Request, res: Response): Promise<void> => {
  const { startTime, endTime, symbol } = req.query;
  console.log(startTime, endTime);

  const result = await analizeTradesHistory(symbol as string, startTime as string, endTime as string);
  res.json({ success: true, data: result });
};
