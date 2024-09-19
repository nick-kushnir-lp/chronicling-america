<template>
  <div>
    <input v-model="query" @input="onSearch" placeholder="Search companies..." />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['search'],
  setup(_, { emit }) {
    const query = ref('');

    const onSearch = () => {
      emit('search', query.value);
    };

    return {
      query,
      onSearch,
    };
  },
});
</script>
