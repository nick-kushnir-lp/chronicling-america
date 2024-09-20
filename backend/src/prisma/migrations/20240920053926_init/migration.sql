/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Company";

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "company_name" TEXT NOT NULL,
    "ticker" TEXT,
    "sector" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "profitable" BOOLEAN NOT NULL,
    "founder_is_ceo" BOOLEAN NOT NULL,
    "female_ceo" BOOLEAN NOT NULL,
    "growth_in_jobs" DOUBLE PRECISION NOT NULL,
    "change_in_rank" DOUBLE PRECISION NOT NULL,
    "gained_in_rank" BOOLEAN NOT NULL,
    "dropped_in_rank" BOOLEAN NOT NULL,
    "newcomer_to_the_fortune500" BOOLEAN NOT NULL,
    "global500" BOOLEAN NOT NULL,
    "worlds_most_admired_companies" BOOLEAN NOT NULL,
    "best_companies_to_work_for" BOOLEAN NOT NULL,
    "number_of_employees" INTEGER NOT NULL,
    "market_cap_march28_m" DOUBLE PRECISION NOT NULL,
    "revenues_m" DOUBLE PRECISION NOT NULL,
    "revenue_percent_change" DOUBLE PRECISION NOT NULL,
    "profits_m" DOUBLE PRECISION NOT NULL,
    "profits_percent_change" DOUBLE PRECISION NOT NULL,
    "assets_m" DOUBLE PRECISION NOT NULL,
    "ceo" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "headquarters_city" TEXT NOT NULL,
    "headquarters_state" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "company_type" TEXT NOT NULL,
    "footnote" TEXT,
    "market_cap_updated_m" DOUBLE PRECISION NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);
