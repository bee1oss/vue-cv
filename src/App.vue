<script setup lang="ts">
  import MainCV from './components/MainCV.vue';
  import { useHead } from '@vueuse/head';
  import { useCursorAnimation } from './composables/cursorAnimation';

  const { cursorStyle, isClickable } = useCursorAnimation();

  useHead({
    title: 'Ana Başlık | Portfolio',
    meta: [
      { name: 'description', content: 'Begench Hajyyev - Yazılım geliştirici portföyü' },
      { name: 'keywords', content: 'Vue, NestJS, Yazılım, Portfolio, Web Developer' },
      { name: 'author', content: 'Begench Hajyyev' },
      { property: 'og:title', content: 'Begench Hajyyev Portfolio' },
      { property: 'og:description', content: 'Full Stack Developer olarak projelerim.' },
    ],
  });
</script>

<template>
  <div>
    <div :class="['custom-cursor', { clickable: isClickable }]" :style="cursorStyle"></div>
    <MainCV />
    <slot />
  </div>
</template>

<style>
  @import './assets/main.css';
</style>
