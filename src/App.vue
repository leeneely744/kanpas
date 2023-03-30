<template>
  <div id="app">
    <AppHeader />
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/Header.vue';

export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>
