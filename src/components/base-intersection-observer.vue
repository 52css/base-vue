<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
export interface BaseIntersectionObserverProps {
  disabled?: boolean;
}
export const BaseIntersectionObserverDefault = {
  disabled: false,
};
export interface BaseIntersectionObserverEmits {
  (event: 'enter'): void;
  (event: 'leave'): void;
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
const baseIntersectionObserverRef = ref();

const ob = new IntersectionObserver(async (entries) => {
  const entry = entries[0];
  if (props.disabled) {
    return;
  }
  // console.log('entry', entry.isIntersecting, loading.value, noMore.value)
  if (!entry.isIntersecting) {
    emit('leave');
    return;
  }
  emit('enter');
  // console.log('加载更多')
});

onMounted(async () => {
  const element = baseIntersectionObserverRef.value;
  element && ob.observe(element);
});
onBeforeUnmount(() => {
  const element = baseIntersectionObserverRef.value;
  element && ob.unobserve(element);
});
</script>

<template>
  <div ref="baseIntersectionObserverRef" class="base-appear">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-intersection-observer {
}
</style>
