import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCompanyByIdService = async (id: string) => {
    return prisma.company.findUnique({ where: { id } });
};

export const searchCompaniesService = async (query: string) => {
    return prisma.company.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: 'insensitive' } },
                { ticker: { contains: query, mode: 'insensitive' } },
            ],
        },
    });
};