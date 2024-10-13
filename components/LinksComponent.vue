<template>
    <div class="container">
      <!-- Mobile preview -->
      <div class="mobilePreview">
        <div class="mobileFrame">
          <div class="avatar"></div>
          <div class="namePlaceholder"></div>
          <div class="bioPlaceholder"></div>
          <div v-for="link in links" :key="link.platform" :class="['linkButton', `${link.platform.toLowerCase()}Link`]">
            <Icon :name="iconMap[link.platform]" />
            <Icon name="uil:angle-right" />
          </div>
        </div>
      </div>
  
      <!-- Link customization form -->
      <div class="customizationForm">
        <h2 class="title">Customize your links</h2>
        <p class="subtitle">Add/edit/remove links below and then share all your profiles with the world!</p>
        
        <button @click="addNewLink" class="addButton">
          + Add new link
        </button>
  
        <div v-for="(link, index) in links" :key="index" class="linkItem">
          <div class="linkHeader">
            <span class="linkNumber">Link #{{ index + 1 }}</span>
            <button @click="removeLink(index)" class="removeButton">Remove</button>
          </div>
          <div>
            <label class="formLabel">Platform</label>
            <select v-model="link.platform" class="select">
              <option v-for="platform in platforms" :key="platform" :value="platform">{{ platform }}</option>
            </select>
          </div>
          <div>
            <label class="formLabel">Link</label>
            <div class="inputGroup">
              <span class="inputIcon">
                <Icon name="uil:link" />
              </span>
              <input type="text" v-model="link.url" class="input" :placeholder="`https://www.${link.platform.toLowerCase()}.com/yourprofile`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const links = ref([
    { platform: 'GitHub', url: 'https://www.github.com/benwright' },
    { platform: 'YouTube', url: 'https://www.youtube.com/benwright' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/benwright' }
  ])
  
  const platforms = ['GitHub', 'YouTube', 'LinkedIn', 'Twitter', 'Facebook', 'Instagram']
  
  const iconMap = {
    GitHub: 'uil:github',
    YouTube: 'uil:youtube',
    LinkedIn: 'uil:linkedin',
    Twitter: 'uil:twitter',
    Facebook: 'uil:facebook',
    Instagram: 'uil:instagram'
  }
  
  const addNewLink = () => {
    links.value.push({ platform: 'GitHub', url: '' })
  }
  
  const removeLink = (index) => {
    links.value.splice(index, 1)
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }
  }
  
  .mobilePreview {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  @media (min-width: 768px) {
    .mobilePreview {
      width: 50%;
    }
  }
  
  .mobileFrame {
    width: 16rem;
    height: 500px;
    background-color: #f3f4f6;
    border-radius: 40px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .avatar {
    width: 5rem;
    height: 5rem;
    background-color: #d1d5db;
    border-radius: 9999px;
    margin-bottom: 1rem;
  }
  
  .namePlaceholder {
    width: 8rem;
    height: 1rem;
    background-color: #d1d5db;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .bioPlaceholder {
    width: 6rem;
    height: 0.75rem;
    background-color: #d1d5db;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
  }
  
  .linkButton {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  
  .customizationForm {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .customizationForm {
      width: 50%;
    }
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    color: #4b5563;
    margin-bottom: 1rem;
  }
  
  .addButton {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #3b82f6;
    color: #3b82f6;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    transition: background-color 0.3s;
  }
  
  .addButton:hover {
    background-color: #eff6ff;
  }
  
  .linkItem {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #f3f4f6;
    border-radius: 0.5rem;
  }
  
  .linkHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .linkNumber {
    font-weight: 600;
  }
  
  .removeButton {
    color: #6b7280;
  }
  
  .removeButton:hover {
    color: #ef4444;
  }
  
  .formLabel {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }
  
  .select {
    margin-top: 0.25rem;
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }
  
  .select:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    border-color: #3b82f6;
  }
  
  .inputGroup {
    margin-top: 0.25rem;
    display: flex;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  
  .inputIcon {
    display: inline-flex;
    align-items: center;
    padding: 0 0.75rem;
    border: 1px solid #d1d5db;
    border-right: none;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    background-color: #f9fafb;
    color: #6b7280;
    font-size: 0.875rem;
  }
  
  .input {
    flex: 1;
    min-width: 0;
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border: 1px solid #d1d5db;
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
  
  .input:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    border-color: #3b82f6;
  }
  
  .githubLink {
    background-color: #000000;
    color: #ffffff;
  }
  
  .youtubeLink {
    background-color: #ef4444;
    color: #ffffff;
  }
  
  .linkedinLink {
    background-color: #2563eb;
    color: #ffffff;
  }
  
  .twitterLink {
    background-color: #60a5fa;
    color: #ffffff;
  }
  
  .facebookLink {
    background-color: #1e40af;
    color: #ffffff;
  }
  
  .instagramLink {
    background-color: #db2777;
    color: #ffffff;
  }
  </style>