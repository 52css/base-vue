import { onUnmounted, ref } from 'vue';

export const useDefer = (maxCount = 10) => {
  const count = ref(0);
  let reqId: number;
  const updateFrame = () => {
    count.value++;
    if (count.value > maxCount) {
      return;
    }
    reqId = requestAnimationFrame(updateFrame);
  };
  updateFrame();
  onUnmounted(() => {
    cancelAnimationFrame(reqId);
  });
  return function (n: number) {
    return count.value >= n;
  };
};
