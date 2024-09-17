import { Client } from 'pg';
import fs from 'fs';
import fastcsv from 'fast-csv';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

client.connect();

const csvFilePath = '../data/fortune1000_2024.csv';

const stream = fs.createReadStream(csvFilePath);
const csvData: any[] = [];
const csvStream = fastcsv
    .parse()
    .on('data', (data) => {
        csvData.push(data);
    })
    .on('end', () => {
        csvData.shift();
        const query =
            'INSERT INTO companies(rank, company_name, ticker, sector, industry, profitable, founder_is_ceo, female_ceo, growth_in_jobs, change_in_rank, gained_in_rank, dropped_in_rank, newcomer_to_the_fortune500, global500, worlds_most_admired_companies, best_companies_to_work_for, number_of_employees, market_cap_march28_m, revenues_m, revenue_percent_change, profits_m, profits_percent_change, assets_m, ceo, country, headquarters_city, headquarters_state, website, company_type, footnote, market_cap_updated_m, updated) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32)';
        csvData.forEach((row) => {
            client.query(query, row, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log('inserted ' + res.rowCount + ' row:', row);
                }
            });
        });
    });

stream.pipe(csvStream);