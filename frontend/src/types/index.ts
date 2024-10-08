export interface Company {
    id: string;
    rank: number;
    company_name: string;
    ticker?: string;
    sector: string;
    industry: string;
    profitable: boolean;
    founder_is_ceo: boolean;
    female_ceo: boolean;
    growth_in_jobs: number;
    change_in_rank: number;
    gained_in_rank: boolean;
    dropped_in_rank: boolean;
    newcomer_to_the_fortune500: boolean;
    global500: boolean;
    worlds_most_admired_companies: boolean;
    best_companies_to_work_for: boolean;
    number_of_employees: number;
    market_cap_march28_m: number;
    revenues_m: number;
    revenue_percent_change: number;
    profits_m: number;
    profits_percent_change: number;
    assets_m: number;
    ceo: string;
    country: string;
    headquarters_city: string;
    headquarters_state: string;
    website: string;
    company_type: string;
    footnote?: string;
    market_cap_updated_m: number;
    updated: Date;
}
