<template>
  <div v-if="company">
    <h1>{{ company.name }}</h1>
    <p>CEO: {{ company.ceo }}</p>
    <p>Location: {{ company.location }}</p>
    <p>Revenue: {{ company.revenue }}</p>
    <!-- Display other fields -->
  </div>
  <div v-else>
    <p>Company details not available.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCompanyStore } from '../store/companyStore';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const companyStore = useCompanyStore();
    const route = useRoute();

    onMounted(() => {
      companyStore.fetchCompanyById(route.params.id as string);
    });

    return {
      company: companyStore.selectedCompany,
    };
  },
});
</script>
