import express from 'express';
import companyRoutes from './routes/companyRoutes';
import searchRoutes from './routes/searchRoutes';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'  // Replace with your frontend URL
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/companies', companyRoutes);
app.use('/api/search', searchRoutes);

module.exports = app;
