<template>
  <div id="app">
    <AppHeader />
    <Main />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/Header.vue';
import Main from './components/Main.vue';

export default defineComponent({
  components: {
    AppHeader,
    Main,
  },
});
</script>
