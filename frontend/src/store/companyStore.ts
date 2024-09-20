import { defineStore } from 'pinia';
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const useCompanyStore = defineStore('company', {
    state: () => ({
        companies: [],
        selectedCompany: null,
    }),
    actions: {
        async fetchCompanies(query: string) {
            const response = await axios.get(`${apiBaseUrl}/search?q=${query}`);
            this.companies = response.data;
        },
        async fetchCompanyById(id: string) {
            const response = await axios.get(`${apiBaseUrl}/companies/${id}`);
            this.selectedCompany = response.data;
        },
    },
});
