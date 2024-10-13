<template>
  <div class="container">
    <!-- Mobile preview -->
    <div class="mobilePreview">
      <div class="mobileFrame">
        <div class="profileImage">
          <img :src="profile.imageUrl" alt="Profile picture" />
        </div>
        <h2 class="profileName">{{ profile.firstName }} {{ profile.lastName }}</h2>
        <p class="profileEmail">{{ profile.email }}</p>
        <div v-for="link in links" :key="link.platform" :class="['linkButton', `${link.platform.toLowerCase()}Link`]">
          <Icon :name="iconMap[link.platform]" />
          <Icon name="uil:angle-right" />
        </div>
      </div>
    </div>

    <!-- Profile details form -->
    <div class="profileForm">
      <h2 class="title">Profile Details</h2>
      <p class="subtitle">Add your details to create a personal touch to your profile.</p>

      <div class="imageUpload">
        <p class="formLabel">Profile picture</p>
        <div class="imagePreview" @click="triggerFileInput">
          <img :src="profile.imageUrl" alt="Profile picture" />
          <div class="changeOverlay">
            <Icon name="uil:image" />
            <span>Change Image</span>
          </div>
        </div>
        <input type="file" ref="fileInput" @change="handleImageUpload" accept="image/*" style="display: none;" />
        <p class="imageRequirements">Image must be below 1024x1024px. Use PNG, JPG, or BMP format.</p>
      </div>

      <div class="formGroup">
        <label class="formLabel">First name*</label>
        <input v-model="profile.firstName" type="text" class="formInput" />
      </div>

      <div class="formGroup">
        <label class="formLabel">Last name*</label>
        <input v-model="profile.lastName" type="text" class="formInput" />
      </div>

      <div class="formGroup">
        <label class="formLabel">Email</label>
        <input v-model="profile.email" type="email" class="formInput" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const profile = ref({
  firstName: 'Ben',
  lastName: 'Wright',
  email: 'ben@example.com',
  imageUrl: '/api/placeholder/200/200', // Placeholder image URL
});

const links = ref([
  { platform: 'GitHub', url: 'https://github.com/benwright' },
  { platform: 'YouTube', url: 'https://youtube.com/benwright' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/benwright' },
]);

const iconMap = {
  GitHub: 'uil:github',
  YouTube: 'uil:youtube',
  LinkedIn: 'uil:linkedin',
};

const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profile.value.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  flex-direction: column; /* Stacked for mobile */
}

/* Mobile Preview */
.mobilePreview, .profileForm {
  flex: 1;
}

.mobileFrame {
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 2px solid #e5e7eb;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  margin: 0 auto; /* Center for mobile */
}

.profileImage {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3px solid #9333ea;
}

.profileImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileName {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.profileEmail {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.linkButton {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.linkButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.githubLink { background-color: #1a1a1a; }
.youtubeLink { background-color: #FF0000; }
.linkedinLink { background-color: #0077B5; }

/* Profile Form */
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
}

.subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.imageUpload {
  margin-bottom: 2rem;
}

.imagePreview {
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 2px dashed #9333ea;
  background-color: #f3f4f6;
  margin: 0 auto; /* Center for mobile */
}

.imagePreview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.changeOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.imagePreview:hover .changeOverlay {
  opacity: 1;
}

.imageRequirements {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
}

.formGroup {
  margin-bottom: 1.5rem;
}

.formLabel {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.formInput {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.formInput:focus {
  outline: none;
  border-color: #9333ea;
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
}

/* Media Queries for Mobile */
@media (min-width: 768px) {
  .container {
    flex-direction: row; /* Row layout for larger screens */
  }

  .mobilePreview {
    max-width: 50%;
  }

  .profileForm {
    max-width: 50%;
  }
}
</style>
