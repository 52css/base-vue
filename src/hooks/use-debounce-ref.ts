import { customRef } from 'vue';

export const useDebounceRef = <T>(value: T, delay = 1000) => {
  let timer: undefined | number;
  return customRef((track, trigger) => ({
    get() {
      // 依赖收集
      track();
      return value;
    },
    set(val) {
      window.clearTimeout(timer);

      timer = setTimeout(() => {
        // 派发更新
        trigger();
        value = val;
      }, delay);
    },
  }));
};
