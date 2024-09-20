import { Request, Response } from 'express';
import { searchCompaniesService } from '../services/companyService';

export const searchCompanies = async (req: Request, res: Response) => {
    const query = req.query.q as string;

    try {
        if (!query || query.trim().length === 0) {
            return res.status(400).json({ message: 'Query parameter is required and cannot be empty' });
        }
        const companies = await searchCompaniesService(query);
        res.json(companies);
    } catch (error) {
        // Assert that error is of type 'Error'
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        console.error('Error occurred while searching companies:', error); // Log the complete error
        res.status(500).json({ message: 'Error due searching companies', error: errorMessage });
    }
};
