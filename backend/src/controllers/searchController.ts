import { Request, Response } from 'express';
import { searchCompaniesService } from '../services/companyService';
export const searchCompanies = async (req: Request, res: Response) => {
    const query = req.query.q as string;

    try {
        const companies = await searchCompaniesService(query);
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Error due searching companies' });
    }
};