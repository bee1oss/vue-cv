<script setup lang="ts">
  import { ref, onMounted, nextTick, watch } from 'vue';
  import { useCodeAnimation } from '../composables/useCodeAnimation';
  import ProfileHeader from './ProfileHeader.vue';
  import SidebarInfo from './SidebarInfo.vue';
  import MainContent from './MainContent.vue';

  useCodeAnimation();

  const darkMode = ref(false);

  // Tema izleme
  watch(darkMode, (newVal) => {
    localStorage.setItem('theme', newVal ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark-mode', newVal);
  });

  // Sayfa yüklendiğinde çalışır
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      darkMode.value = true;
      document.documentElement.classList.add('dark-mode');
    }

    nextTick(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          const width = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        }
      });
    });
  });
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }">
    <div class="code-bg" id="codeBackground"></div>

    <div class="theme-switch-wrapper">
      <label class="theme-switch">
        <input type="checkbox" v-model="darkMode" aria-label="Toggle dark mode" />
        <div class="slider round">
          <i class="fas fa-sun"></i>
          <i class="fas fa-moon"></i>
        </div>
      </label>
    </div>

    <ProfileHeader />

    <div class="container">
      <div class="main-content">
        <SidebarInfo />
        <MainContent />
      </div>
    </div>

    <footer>
      <p>&copy; 2025 Begench Hajyyev. Tüm hakları saklıdır.</p>
    </footer>
  </div>
</template>
