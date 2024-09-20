<template>
  <div>
    <SearchBar @search="onSearch" /> <!-- SearchBar component triggers the search -->
    <div v-if="companies.length">
      <CompanyCard v-for="company in companies" :key="company.id" :company="company" />
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import CompanyCard from '../components/CompanyCard.vue';
import { useCompanyStore } from '../store/companyStore';

const companyStore = useCompanyStore();

const companies = computed(() => companyStore.companies);

const onSearch = (query: string) => {
  companyStore.fetchCompanies(query);
};
</script>
