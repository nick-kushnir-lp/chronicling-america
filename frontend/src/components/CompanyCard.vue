<template>
  <div class="bg-white rounded-lg shadow-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h2 class="text-xl font-semibold mb-2 text-blue-600">{{ company.company_name }}</h2>
    <p class="text-gray-700 mb-2"><span class="font-semibold">CEO:</span> {{ company.ceo }}</p>
    <p class="text-gray-700 mb-4"><span class="font-semibold">Location:</span> {{ company.country }}</p>
    <router-link
        :to="`/company/${company.id}`"
        class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out"
    >
      View Details
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Company } from '../types';

export default defineComponent({
  props: {
    company: {
      type: Object as PropType<Company>,
      required: true,
    },
  },
});
</script>
