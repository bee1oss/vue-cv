import { onMounted, onUnmounted } from 'vue';

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
  'document.querySelector("#id")',
  'window.addEventListener("resize", updateLayout);',
  'function animate() { requestAnimationFrame(animate); }',
  'Vue.createApp(App).mount("#app");',
  'const sum = (a, b) => a + b;',
  'try { dangerousFn(); } catch (e) { console.error(e); }',
  'type User = { id: number, name: string };',
  'interface Product { name: string; price: number; }',
  'const [state, setState] = useState(0);',
  'npm install vue',
  'git push origin main',
  'console.warn("Deprecated method");',
  'function isEven(n) { return n % 2 === 0; }',
  'import { ref } from "vue";',
  'export default defineComponent({})',
  '// TODO: Refactor this logic',
  '/* Animate skill bars smoothly */',
  'switch(mode) { case "dark": applyDark(); break; }',
  'let score = Math.floor(Math.random() * 100);',
  'JSON.stringify(data, null, 2);',
  'Array.from(document.querySelectorAll("div"))',
  'new Date().toLocaleTimeString();',
  'const id = crypto.randomUUID();',
  'sessionStorage.setItem("session", id);',
  'const el = document.createElement("div");',
  'document.body.appendChild(el);',
  'el.style.opacity = 0.5;',
  'setTimeout(() => el.remove(), 5000);',
  'window.location.href = "/login";',
  'Object.keys(obj).forEach(k => console.log(k));',
  'function debounce(fn, delay) { ... }',
  'function throttle(fn, limit) { ... }',
  'let interval = setInterval(draw, 100);',
  'clearInterval(interval);',
  'navigator.clipboard.writeText("Copied!")',
  'self.addEventListener("message", handler);',
];

export function useCodeAnimation() {
  const createCodeLines = () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const codeBackground = document.getElementById('codeBackground');

    if (!codeBackground) return;

    for (let i = 0; i < 100; i++) {
      const line = document.createElement('div');
      line.className = 'code-line';
      line.textContent = codeLines[Math.floor(Math.random() * codeLines.length)];

      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      const duration = 20 + Math.random() * 20;
      const delay = Math.random() * -30;

      line.style.left = `${left}px`;
      line.style.top = `${top}px`;
      line.style.animationDuration = `${duration}s`;
      line.style.animationDelay = `${delay}s`;

      codeBackground.appendChild(line);
    }
  };

  const handleResize = () => {
    const codeBackground = document.getElementById('codeBackground');
    if (!codeBackground) return;

    while (codeBackground.firstChild) {
      codeBackground.removeChild(codeBackground.firstChild);
    }
    createCodeLines();
  };

  onMounted(() => {
    createCodeLines();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
}
