import { computed } from 'vue';

type UseComputedFn = {
  (...args: any): any;
};

export const useComputed = (fn: UseComputedFn) => {
  const cache = new Map();

  function getCache(args: any[]) {
    return cache.get(JSON.stringify(args));
  }

  return function (...args: any[]) {
    const cacheResult = getCache(args);
    if (cacheResult) {
      return cacheResult;
    }
    const result = computed(() => fn(...args));
    cache.set(JSON.stringify(args), result);
    return result;
  };
};
