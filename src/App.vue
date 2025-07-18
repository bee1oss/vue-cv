<script setup lang="ts">
  import MainCV from './components/MainCV.vue';
  import { useCursorAnimation } from './composables/cursorAnimation';

  const { cursorStyle, isClickable } = useCursorAnimation();
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
