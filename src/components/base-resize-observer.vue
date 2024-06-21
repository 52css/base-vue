<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
export interface BaseResizeObserverProps {
  disabled?: boolean;
}
export const BaseResizeObserverDefault = {
  disabled: false,
};
export interface BaseResizeObserverEmits {
  (event: 'observer', entry: ResizeObserverEntry): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseResizeObserverProps>(),
  BaseResizeObserverDefault
);
const emit = defineEmits<BaseResizeObserverEmits>();
defineOptions({
  name: 'BaseResizeObserver',
});
const baseResizeObserverRef = ref();

const ob = new ResizeObserver((entries) => {
  const entry = entries[0];
  if (props.disabled) {
    return;
  }

  console.log('11');

  emit('observer', entry);
});

onMounted(async () => {
  const element = baseResizeObserverRef.value;
  element && ob.observe(element);
});
onBeforeUnmount(() => {
  const element = baseResizeObserverRef.value;
  element && ob.unobserve(element);
});
</script>

<template>
  <div ref="baseResizeObserverRef" class="base-resize-observer">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-resize-observer {
}
</style>
