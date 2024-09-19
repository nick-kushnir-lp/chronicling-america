<template>
  <div id="app">
    <header>
      <h1>Fortune 1000 Companies</h1>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

h1 {
  margin: 0;
}
</style>
