<script setup lang="ts">
  import { ref, onMounted, nextTick, watch } from 'vue';
  import { useCodeAnimation } from '../composables/useCodeAnimation';
  import ProfileHeader from './ProfileHeader.vue';
  import SidebarInfo from './SidebarInfo.vue';
  import MainContent from './MainContent.vue';
  import { useI18n } from 'vue-i18n';
  import { useHead } from '@vueuse/head';

  const { t } = useI18n();

  const { locale } = useI18n();

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
    //some
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

  useHead({
    title: 'Begench Hajyyev | Full Stack Yazılım Geliştirici',
    meta: [
      {
        name: 'description',
        content:
          'Full stack yazılım geliştirici, web güvenliği uzmanı ve mobil uygulama geliştiricisi. Projelerime göz atın!',
      },
      {
        name: 'keywords',
        content:
          'Begench Hajyyev, yazılım geliştirici, full stack, Vue, TypeScript, Node.js, NestJS, web güvenliği, React Native, freelance',
      },
      { name: 'author', content: 'Begench Hajyyev' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph for social media (Facebook, LinkedIn)
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Begench Hajyyev | Full Stack Yazılım Geliştirici' },
      {
        property: 'og:description',
        content: 'Web güvenliği ve yazılım geliştirme konularındaki projelerime göz atın!',
      },
      { property: 'og:image', content: 'https://seninsiten.com/images/preview.jpg' }, // Örnek görsel URL
      { property: 'og:url', content: 'https://seninsiten.com' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Begench Hajyyev | Full Stack Developer' },
      {
        name: 'twitter:description',
        content:
          'Yazılım projelerimi inceleyin. Web, mobil ve oyun geliştirme konularında çalışmalar.',
      },
      { name: 'twitter:image', content: 'https://seninsiten.com/images/preview.jpg' }, // Aynı görsel

      // Language
      { name: 'language', content: 'tr' }, // veya dynamic olarak locale.value
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://seninsiten.com', // senin gerçek domaininle değiştir
      },
    ],
  });
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }">
    <div class="code-bg" id="codeBackground"></div>

    <div class="top-bar">
      <div class="language-switch">
        <input type="radio" id="lang-tr" value="tr" v-model="locale" />
        <label for="lang-tr">TR</label>

        <input type="radio" id="lang-en" value="en" v-model="locale" />
        <label for="lang-en">EN</label>
      </div>

      <div class="theme-switch-wrapper">
        <label class="theme-switch">
          <input type="checkbox" v-model="darkMode" aria-label="Tema Değiştirici" />
          <div class="slider round">
            <i class="fas fa-sun"></i>
            <i class="fas fa-moon"></i>
          </div>
        </label>
      </div>
    </div>

    <ProfileHeader />

    <div class="container">
      <div class="main-content">
        <SidebarInfo />
        <MainContent />
      </div>
    </div>

    <footer>
      <p>&copy; {{ t('rights') }}</p>
    </footer>
  </div>
</template>
