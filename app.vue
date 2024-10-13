<template>
  <div>
    <!-- Header Section -->
    <HeaderComponent />

    <!-- Main Content Section -->
    <main>
      <NuxtPage /> <!-- This renders the current page component -->
    </main>

    <!-- Footer Section -->
   

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<style scoped>
main {
  min-height: 70vh; /* Ensures the main content takes up enough space */
  padding: 20px;
}
</style>
