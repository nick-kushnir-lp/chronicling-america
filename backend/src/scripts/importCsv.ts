import fs from 'fs';
import { parse } from 'fast-csv';
import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'LivePerson2024!#!#!#!#',
    port: 5432,
});

const parseBoolean = (value: string | null): boolean => {
    return value?.toLowerCase() === 'yes';
};

const parseInteger = (value: string | null): number => {
    const parsed = parseInt(value || '0', 10);
    return isNaN(parsed) ? 0 : parsed;
};

const parseFloatValue = (value: string | null): number => {
    const parsed = parseFloat(value || '0');
    return isNaN(parsed) ? 0.0 : parsed;
};

// Function to import CSV data into the database
const importCsvData = async () => {
    const csvData: (string | null)[][] = [];

    return new Promise<void>((resolve, reject) => {
        const stream = fs.createReadStream('src/data/fortune1000_2024.csv');

        const csvStream = parse()
            .on('data', (data: (string | null)[]) => {
                csvData.push(data);
            })
            .on('end', async () => {
                csvData.shift(); // Remove header row

                const correctedData = csvData.map(row => {
                    if (row.length === 32) {
                        row.push('1970-01-01T00:00:00.000Z');
                    }
                    return row;
                });

                // Validate and convert each field to the correct type as per the database schema
                const formattedData = correctedData.map(row => {
                    return [
                        row[0],
                        parseInteger(row[1]),
                        row[2],
                        row[3],
                        row[4],
                        row[5],
                        parseBoolean(row[6]),
                        parseBoolean(row[7]),
                        parseBoolean(row[8]),
                        parseFloatValue(row[9]),
                        parseFloatValue(row[10]),
                        parseBoolean(row[11]),
                        parseBoolean(row[12]),
                        parseBoolean(row[13]),
                        parseBoolean(row[14]),
                        parseBoolean(row[15]),
                        parseBoolean(row[16]),
                        parseInteger(row[17]),
                        parseFloatValue(row[18]),
                        parseFloatValue(row[19]),
                        parseFloatValue(row[20]),
                        parseFloatValue(row[21]),
                        parseFloatValue(row[22]),
                        parseFloatValue(row[23]),
                        row[24],
                        row[25],
                        row[26],
                        row[27],
                        row[28],
                        row[29],
                        row[30],
                        parseFloatValue(row[31]),
                        new Date(row[32] || '1970-01-01') // updated as date
                    ];
                });
                const query = `
                    INSERT INTO Company 
                    (id, rank, company_name, ticker, sector, industry, profitable, founder_is_ceo, female_ceo, growth_in_jobs, change_in_rank, gained_in_rank, dropped_in_rank, newcomer_to_the_fortune500, global500, worlds_most_admired_companies, best_companies_to_work_for, number_of_employees, market_cap_march28_m, revenues_m, revenue_percent_change, profits_m, profits_percent_change, assets_m, ceo, country, headquarters_city, headquarters_state, website, company_type, footnote, market_cap_updated_m, updated) 
                    VALUES 
                    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33)
                    ON CONFLICT (id) DO NOTHING;`;

                for (const [index, row] of formattedData.entries()) {
                    try {
                        await client.query(query, row);
                    } catch (err) {
                        console.error(`Error inserting row ${index + 1}:`, err);
                        reject(err);
                        return;
                    }
                }
                resolve();
            })
            .on('error', (error) => {
                console.error('Error reading CSV file:', error);
                reject(error);
            });

        stream.pipe(csvStream);
    });
};
const main = async () => {
    try {
        await client.connect();
        console.log('Connected to the database.');

        await importCsvData();
        console.log('CSV data imported successfully.');
    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        await client.end();
        console.log('Database connection closed.');
    }
};
main();
