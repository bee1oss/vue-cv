<script setup lang="ts">
  import profileImage from '../assets/bega.png';

  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/begech-hajyyev-675887272/' },
    { icon: 'fab fa-github', url: 'https://github.com/bee1oss' },
    { icon: 'fab fa-twitter', url: 'https://x.com/BHajyyev' },
    {
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/bega.hw/profilecard/?igsh=MXg0NXJxY21xenduZw==',
    },
  ];
</script>

<template>
  <header>
    <img :src="profileImage" alt="Profil Fotoğrafı" class="profile-img" />
    <h1>Begench Hajyyev</h1>
    <p class="title">Software Engineer / Web Security</p>
    <div class="social-links">
      <a
        v-for="link in socialLinks"
        :key="link.icon"
        :href="link.url"
        :title="` ${link.icon.split('fa-')[1]} sayfasına git `"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="link.icon"></i>
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
  /* Header stilleri buraya */
</style>
