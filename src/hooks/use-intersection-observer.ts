import { onMounted, onBeforeUnmount, ref, Ref } from 'vue';

export type UseIntersectionObserverOptions = {
  disabled?: Ref<boolean>;
  observer?: (entry: IntersectionObserverEntry) => void;
  leave?: (entry: IntersectionObserverEntry) => void;
  enter?: (entry: IntersectionObserverEntry) => void;
};

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions
) => {
  const element = ref()
  const ob = new IntersectionObserver(async (entries) => {
    const entry = entries[0];
    if (options?.disabled?.value) {
      return;
    }
    options?.observer?.(entry);
    // console.log('entry', entry.isIntersecting, loading.value, noMore.value)
    if (!entry.isIntersecting) {
      options?.leave?.(entry);
      return;
    }
    options?.enter?.(entry);
  });

  onMounted( () => {
    ob.observe(element.value);
  });
  onBeforeUnmount(() => {
    ob.unobserve(element.value);
  });

  return element;
};
