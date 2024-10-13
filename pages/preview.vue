<template>
    <div class="container">
      <div class="card">
        <div class="profile-image">
          <img :src="profile.imageUrl" :alt="`${profile.firstName} ${profile.lastName}`" />
        </div>
        <h2 class="profile-name">{{ profile.firstName }} {{ profile.lastName }}</h2>
        <p class="profile-email">{{ profile.email }}</p>
        <div v-for="link in links" :key="link.platform" class="link-button" :style="{ backgroundColor: link.color }" @click="openLink(link.url)">
          <span class="link-icon" v-html="link.icon"></span>
          <span class="link-text">{{ link.platform }}</span>
          <span class="link-arrow">&rsaquo;</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileCard',
    data() {
      return {
        profile: {
          firstName: 'Ben',
          lastName: 'Wright',
          email: 'ben@example.com',
          imageUrl: '/api/placeholder/200/200', // Dummy image URL
        },
        links: [
          {
            platform: 'GitHub',
            url: 'https://github.com/benwright',
            color: '#333',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
          },
          {
            platform: 'YouTube',
            url: 'https://youtube.com/benwright',
            color: '#FF0000',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>'
          },
          {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/benwright',
            color: '#0077B5',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
          },
        ],
      };
    },
    methods: {
      openLink(url) {
        window.open(url, '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
  }
  
  .card {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    width: 100%;
    max-width: 400px;
  }
  
  .profile-image {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    border: 4px solid #8b5cf6;
  }
  
  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  
  .profile-email {
    font-size: 1rem;
    color: #6b7280;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .link-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    margin-bottom: 0.75rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .link-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .link-icon {
    display: flex;
    align-items: center;
  }
  
  .link-text {
    flex-grow: 1;
    text-align: left;
    margin-left: 0.75rem;
  }
  
  .link-arrow {
    font-size: 1.5rem;
  }
  </style>