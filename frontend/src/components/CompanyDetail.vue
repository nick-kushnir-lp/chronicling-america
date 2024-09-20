<template>
  <div v-if="company" class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
    <h1 class="text-3xl font-extrabold mb-4 text-blue-600">{{ company.company_name }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">CEO:</span> {{ company.ceo }}</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Location:</span> {{ company.headquarters_city }}, {{ company.headquarters_state }}</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Country:</span> {{ company.country }}</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Sector:</span> {{ company.sector }}</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Industry:</span> {{ company.industry }}</p>
      </div>
      <div>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Number of Employees:</span> {{ company.number_of_employees.toLocaleString() }}</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Revenue:</span> ${{ company.revenues_m.toLocaleString() }} Million</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Market Cap:</span> ${{ company.market_cap_updated_m.toLocaleString() }} Million</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Profitable:</span> {{ company.profitable ? 'Yes' : 'No' }}</p>
        <p class="text-xl text-gray-700 mb-2"><span class="font-bold">Founder is CEO:</span> {{ company.founder_is_ceo ? 'Yes' : 'No' }}</p>
      </div>
    </div>
    <router-link
        :to="`/`"
        class="inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
    >
      Back to List
    </router-link>
  </div>
  <div v-else class="text-center mt-8">
    <p class="text-gray-500 text-lg">Company details not available.</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCompanyStore } from '../store/companyStore';
import { Company } from '../types';

const companyStore = useCompanyStore();
const route = useRoute();

const company = computed<Company | null>(() => companyStore.selectedCompany);

onMounted(() => {
  const companyId = route.params.id as string;
  if (companyId) {
    companyStore.fetchCompanyById(companyId);
  }
});
</script>
