<template>
  <div>
    <SearchBar @search="onSearch" /> <!-- SearchBar component triggers the search -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" v-if="companies.length">
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
  if (query.trim().length === 0) {
    companies.value.length = 0;
  } else {
    companyStore.fetchCompanies(query);
  }
};
</script>
