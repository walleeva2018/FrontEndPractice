<template>
    <div>
      <LinksComponent  v-if="activeSection==='links'"/>
      <ProfileComponent v-else />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useMyStore } from '../stores/useStore';
  import LinksComponent from '~/components/LinksComponent.vue';
  import ProfileComponent from '~/components/ProfileComponent.vue';

  const store = useMyStore();

  const activeSection = computed(() => store.tab); 
  
  </script>
  