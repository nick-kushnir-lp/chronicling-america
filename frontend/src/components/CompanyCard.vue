<template>
  <div>
    <h2>{{ company.name }}</h2>
    <p>CEO: {{ company.ceo }}</p>
    <p>Location: {{ company.location }}</p>
    <router-link :to="`/company/${company.id}`">View Details</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Company } from '../types/companyTypes';

export default defineComponent({
  props: {
    company: {
      type: Object as PropType<Company>,
      required: true,
    },
  },
});
</script>
