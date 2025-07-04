<template>
  <nav class="navbar">
    <RouterLink to="/" class="link" :class="{ active: isActive('/') }">Ana Sayfa</RouterLink>

    <RouterLink to="/about" class="link" :class="{ active: isActive('/about') }"
      >Hakkında</RouterLink
    >
    <RouterLink to="/contact" class="link" :class="{ active: isActive('/contact') }"
      >İletişim</RouterLink
    >
  </nav>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();

  function isActive(path: string) {
    return route.path === path;
  }
</script>
<style scoped>
  .navbar {
    background: #222;
    padding: 1.5rem 2rem; /* daha büyük padding */
    display: flex; /* inline-flex yerine flex */
    gap: 2rem; /* daha büyük boşluk */
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 2px solid #42b983;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto; /* sayfa ortası */
    width: 100%; /* tam genişlik */
    max-width: 1200px; /* çok büyümesin */
    box-sizing: border-box;
  }

  .link {
    flex: 1; /* Her link eşit yer kaplasın */
    text-align: center; /* İçerik ortalansın */
    color: #ffffff;
    text-decoration: none;
    font-size: 1.3rem; /* Daha büyük font */
    font-weight: bold;
    padding: 1rem 0; /* Dikey padding artırıldı */
    border-radius: 8px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    background-color: transparent;
  }

  .link:hover {
    background-color: #42b983;
    color: #000;
  }

  .link.active {
    background-color: #42b983;
    color: #000;
  }
  @media (max-width: 600px) {
    .navbar {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    .link {
      width: 100%;
      font-size: 1.1rem;
      padding: 0.8rem 0;
    }
  }
</style>
