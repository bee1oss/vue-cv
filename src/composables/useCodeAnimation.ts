import { onMounted, onUnmounted, ref } from 'vue';

const codeLines = [
  'console.log("Hello World!")',
  'let count = 0;',
  'setInterval(() => count++, 1000);',
  'fetch("/api/data").then(res => res.json())',
  'const theme = localStorage.getItem("theme");',
  'if (theme === "dark") enableDarkMode();',
  'for (let i = 0; i < 10; i++) { console.log(i); }',
  'class App extends React.Component {}',
  'const express = require("express");',
  'app.use(express.json());',
  'Vue.createApp(App).mount("#app");',
  'document.querySelector("#id")',
  'window.addEventListener("resize", updateLayout);',
  'function animate() { requestAnimationFrame(animate); }',
  'const sum = (a, b) => a + b;',
  'type User = { id: number, name: string };',
  'interface Product { name: string; price: number; }',
  'git push origin main',
  'import { ref } from "vue";',
  '// TODO: Refactor this logic',
  'switch(mode) { case "dark": applyDark(); break; }',
  'new Date().toLocaleTimeString();',
  'const id = crypto.randomUUID();',
  'sessionStorage.setItem("session", id);',
  'navigator.clipboard.writeText("Copied!")',
];

export function useCodeAnimation() {
  const codeBackground = ref<HTMLElement | null>(null);
  let resizeTimeout: number;

  const createCodeLines = () => {
    if (!codeBackground.value) return;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const baseDensity = 0.2; // Her 100x100 px için 0.2 satır
    const totalLines = Math.floor(((containerWidth * containerHeight) / (100 * 100)) * baseDensity);

    codeBackground.value.innerHTML = ''; // Temizleme

    for (let i = 0; i < totalLines; i++) {
      const line = document.createElement('div');
      line.className = 'code-line';
      line.textContent = codeLines[Math.floor(Math.random() * codeLines.length)];

      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      const duration = 20 + Math.random() * 20;
      const delay = Math.random() * -30;

      Object.assign(line.style, {
        left: `${left}px`,
        top: `${top}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      });

      codeBackground.value.appendChild(line);
    }
  };

  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      createCodeLines();
    }, 300);
  };

  onMounted(() => {
    codeBackground.value = document.getElementById('codeBackground');
    if (!codeBackground.value) return;

    createCodeLines();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
}
