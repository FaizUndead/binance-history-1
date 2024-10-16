import express, { Application } from 'express';
import tradesRoutes from './routes/trades.routes';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();

// Middleware
app.use(express.json());

app.use('/api/trades', tradesRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
