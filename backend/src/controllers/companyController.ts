import { Request, Response } from 'express';
import { ICompany } from '../models/companyModel';
import { getCompanyByIdService } from '../services/companyService';
export const getCompanyById = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const company: ICompany | null = await getCompanyByIdService(id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving company data' });
    }
};