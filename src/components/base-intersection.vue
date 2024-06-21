<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
export interface BaseIntersectionProps {
  disabled?: boolean;
}
export const BaseIntersectionDefault = {
  disabled: false,
};
export interface BaseIntersectionEmits {
  (event: 'enter'): void;
  (event: 'leave'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseIntersectionProps>(),
  BaseIntersectionDefault
);
const emit = defineEmits<BaseIntersectionEmits>();
defineOptions({
  name: 'BaseIntersection',
});
const baseIntersectionRef = ref();

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
  const element = baseIntersectionRef.value;
  element && ob.observe(element);
});
onBeforeUnmount(() => {
  const element = baseIntersectionRef.value;
  element && ob.unobserve(element);
});
</script>

<template>
  <div ref="baseIntersectionRef" class="base-appear">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-appear {
}
</style>
