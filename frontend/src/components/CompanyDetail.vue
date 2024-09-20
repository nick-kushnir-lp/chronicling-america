<template>
  <div v-if="company">
    <h1>{{ company.company_name }}</h1>
    <p>CEO: {{ company.ceo }}</p>
    <p>Location: {{ company.headquarters_city }}, {{ company.headquarters_state }}</p>
    <p>Revenue: {{ company.revenues_m }}</p>
  </div>
  <div v-else>
    <p>Company details not available.</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCompanyStore } from '../store/companyStore';

const companyStore = useCompanyStore();
const route = useRoute();

const company = computed(() => companyStore.selectedCompany);

onMounted(() => {
  const companyId = route.params.id as string;
  if (companyId) {
    companyStore.fetchCompanyById(companyId);
  }
});
</script>
