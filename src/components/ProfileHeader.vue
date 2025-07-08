<script setup lang="ts">
const socialLinks = [
  { icon: 'fab fa-linkedin', url: '#' },
  { icon: 'fab fa-github', url: '#' },
  { icon: 'fab fa-twitter', url: '#' },
  { icon: 'fab fa-instagram', url: '#' }
]
</script>

<template>
  <header>
    <img src="https://via.placeholder.com/150" alt="Profil Fotoğrafı" class="profile-img">
    <h1>Begench Hajyyev</h1>
    <p class="title">Software Engineer / Web Security</p>
    <div class="social-links">
      <a v-for="link in socialLinks" :key="link.icon" :href="link.url">
        <i :class="link.icon"></i>
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
/* Header stilleri buraya */
</style>