import express, { Application } from 'express';
import cors from 'cors';
import companyRoutes from './routes/companyRoutes';
import searchRoutes from './routes/searchRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/companies', companyRoutes);
app.use('/api/search', searchRoutes);

export default app;