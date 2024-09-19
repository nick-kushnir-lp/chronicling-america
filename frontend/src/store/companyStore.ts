import { defineStore } from 'pinia';
import axios from 'axios';
interface Company {
    id: string;
    name: string;
    ceo: string;
    location: string;
    revenue: number;
}

export const useCompanyStore = defineStore('company', {
    state: () => ({
        companies: [] as Company[],
        selectedCompany: null as Company | null,
    }),

    actions: {
        async fetchCompanies(query: string) {
            try {
                const response = await axios.get(`/api/search?q=${query}`);
                this.companies = response.data;  // Store the companies in the state
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        },

        async fetchCompanyById(id: string) {
            try {
                const response = await axios.get(`/api/companies/${id}`);
                this.selectedCompany = response.data;  // Store the selected company details
            } catch (error) {
                console.error('Error fetching company:', error);
            }
        },
    },
});
