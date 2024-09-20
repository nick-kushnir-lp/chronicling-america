import { Request, Response } from 'express';
import { getCompanyByIdService } from '../services/companyService';
import { ICompany } from '../models/companyModel';

export const getCompanyById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const company: ICompany | null = await getCompanyByIdService(id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        return res.json(company);
    } catch (error) {
        console.error('Error fetching company:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
