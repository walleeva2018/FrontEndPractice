<template>
    <header class="header">
      <div @click="gotoHome" class="logo">
        <div class="logo-icon"></div>
        <h1 class="logo-text">devlinks</h1>
      </div>
      <nav class="nav">
        <button class="nav-button" :class="{ active: activeTab === 'links' }" @click="setActiveTab('links')">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span class="nav-text">Links</span>
        </button>
        <button class="nav-button" :class="{ active: activeTab === 'profile' }" @click="setActiveTab('profile')">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="nav-text">Profile Details</span>
        </button>
      </nav>
     
      <button @click="gotoPreview" class="preview-button">
        Preview
      </button>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useMyStore } from '~/stores/useStore';
  import { useRoute, useRouter } from 'vue-router';

  const myStore = useMyStore();
  
  const activeTab = ref<'links' | 'profile'>('links');
  const router = useRouter()
  
  const setActiveTab = (tab: 'links' | 'profile') => {
    myStore.updateTab(tab);
    activeTab.value = tab;
  };

  function gotoPreview(){
    router.push('/preview')
  }  

  function gotoHome(){
    router.push('/')
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .logo-icon {
    width: 2rem;
    height: 2rem;
    background-color: #9333ea;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }
  
  .logo-text {
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .nav {
    display: flex;
    gap: 1rem;
  }
  
  .nav-button {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    background-color: #f3f4f6;
    color: #4b5563;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-button.active {
    background-color: #ede9fe;
    color: #9333ea;
  }
  
  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
  
  .preview-button {
    padding: 0.5rem 1rem;
    border: 1px solid #9333ea;
    color: #9333ea;
    background-color: transparent;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .preview-button:hover {
    background-color: #9333ea;
    color: white;
  }
  
  /* Hide text on mobile screens */
  @media (max-width: 640px) {
    .nav-text {
      display: none;
    }
  
    .nav-button {
      padding: 0.5rem;
    }
  
    .logo-text {
      display: none; /* Hide the logo text on mobile */
    }
  }
  </style>
  