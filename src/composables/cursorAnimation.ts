import { onMounted, onUnmounted, ref } from 'vue';

export function useCursorAnimation() {
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

    cursorStyle.value = {
      left: `${x.value}px`,
      top: `${y.value}px`,
      transform: 'translate(-50%, -50%)',
    };
  };

  onMounted(() => {
    window.addEventListener('mousemove', move);
    document.body.style.cursor = 'none';
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', move);
    document.body.style.cursor = 'default';
  });

  return { cursorStyle, isClickable };
}
