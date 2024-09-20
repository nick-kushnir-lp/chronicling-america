import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCompanyByIdService = async (id: string) => {
    return prisma.company.findUnique({ where: { id } });
};

export const searchCompaniesService = async (query: string) => {
    try {
        return prisma.company.findMany({
            where: {
                OR: [
                    { company_name: { contains: query, mode: 'insensitive' } },
                    { ticker: { contains: query, mode: 'insensitive' } },
                ],
            },
        });
    } catch (error) {
        console.error('Database query error:', error);  // Log the error details
        throw new Error('Error retrieving companies');
    }
};