<template>
  <div>
    <SearchBar @search="onSearch" />  <!-- SearchBar component triggers the search -->
    <div v-if="companies.length">
      <CompanyCard v-for="company in companies" :key="company.id" :company="company" />
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import CompanyCard from '../components/CompanyCard.vue';
import { useCompanyStore } from '../store/companyStore';

export default defineComponent({
  components: {
    SearchBar,
    CompanyCard,
  },
  setup() {
    const companyStore = useCompanyStore();
    const onSearch = (query: string) => {
      companyStore.fetchCompanies(query);
    };
    return {
      companies: companyStore.companies,
      onSearch,
    };
  },
});
</script>
