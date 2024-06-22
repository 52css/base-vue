import { onMounted, onBeforeUnmount } from 'vue';

export const useEsc = (fn: () => void) => {
  const destroy = () => {
    window.removeEventListener('keydown', onEsc);
  };
  const onEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      fn();
    }
  };
  onMounted(() => {
    window.addEventListener('keydown', onEsc);
  });
  onBeforeUnmount(destroy);

  return destroy;
};
