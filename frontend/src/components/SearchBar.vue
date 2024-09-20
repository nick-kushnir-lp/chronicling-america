<template>
  <div class="flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md">
    <input
        v-model="query"
        @input="onSearch"
        placeholder="Search companies..."
        class="w-full md:w-1/2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
const query = ref('');
const emit = defineEmits(['search']);
const onSearch = () => {
  if (query.value.trim().length === 0) {
    emit('search', '');
  } else {
    emit('search', query.value);
  }
};
</script>
