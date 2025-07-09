<script setup lang="ts">
  import MainCV from './components/MainCV.vue';
  import { ref, onMounted, onUnmounted } from 'vue';

  import { useHead } from '@vueuse/head';

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

  const x = ref(0);
  const y = ref(0);
  const isClickable = ref(false);

  const cursorStyle = ref({
    left: '0px',
    top: '0px',
    transform: 'translate(-50%, -50%)',
  });

  const move = (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;

    const target = e.target as HTMLElement;
    isClickable.value = !!target.closest('a, button, input, [role="button"], .clickable');

    cursorStyle.value.left = `${x.value}px`;
    cursorStyle.value.top = `${y.value}px`;
  };

  onMounted(() => {
    window.addEventListener('mousemove', move);
    document.body.style.cursor = 'none';
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', move);
    document.body.style.cursor = 'default';
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
