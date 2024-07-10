<script lang="ts">
import { toRef } from 'vue';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export interface BaseIntersectionObserverProps {
  disabled?: boolean;
}
export const BaseIntersectionObserverDefault = {
  disabled: false,
};
export interface BaseIntersectionObserverEmits {
  (event: 'enter', entry: IntersectionObserverEntry): void;
  (event: 'leave', entry: IntersectionObserverEntry): void;
  (event: 'observer', entry: IntersectionObserverEntry): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseIntersectionObserverProps>(),
  BaseIntersectionObserverDefault
);
const emit = defineEmits<BaseIntersectionObserverEmits>();
defineOptions({
  name: 'BaseIntersectionObserver',
});
const disabled = toRef(props, 'disabled')
const baseIntersectionObserverRef = useIntersectionObserver({
  disabled: disabled,
  observer(entry) {
    emit('observer', entry);
  },
  leave(entry) {
    emit('leave', entry);
  },
  enter(entry) {
    emit('enter', entry);
  },
});
</script>

<template>
  <div ref="baseIntersectionObserverRef" class="base-intersection-observer">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-intersection-observer {
}
</style>
