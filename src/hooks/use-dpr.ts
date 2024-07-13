import { onUnmounted, ref } from 'vue'

export const useDpr = () => {
  const dpr = ref(window.devicePixelRatio);
  const observer = new ResizeObserver(() => {
    dpr.value = window.devicePixelRatio;
  })
  observer.observe(document.documentElement);
  onUnmounted(() => {
    observer.unobserve(document.documentElement);
  })
  return dpr
}