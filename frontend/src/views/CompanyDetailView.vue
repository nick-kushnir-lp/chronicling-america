<template>
  <div>
    <CompanyDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import CompanyDetail from '../components/CompanyDetail.vue';
import { useCompanyStore } from '../store/companyStore';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    CompanyDetail,
  },
  setup() {
    const companyStore = useCompanyStore();
    const route = useRoute();  // Access the route to get the company ID
    onMounted(() => {
      companyStore.fetchCompanyById(route.params.id as string);
    });

    return {
      company: companyStore.selectedCompany,
    };
  },
});
</script>
