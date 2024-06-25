<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
export interface BaseMutationObserverProps {
  disabled?: boolean;
}
export const BaseMutationObserverDefault = {
  disabled: false,
};
export interface BaseMutationObserverEmits {
  (event: 'observer', entry: MutationRecord): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseMutationObserverProps>(),
  BaseMutationObserverDefault
);
const emit = defineEmits<BaseMutationObserverEmits>();
defineOptions({
  name: 'BaseMutationObserver',
});
const baseMutationObserverRef = ref();

const ob = new MutationObserver((entries) => {
  const entry = entries[0];
  if (props.disabled) {
    return;
  }
  emit('observer', entry);
});

onMounted(async () => {
  const element = baseMutationObserverRef.value;
  element &&
    ob.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
    });
});
onBeforeUnmount(() => {
  const element = baseMutationObserverRef.value;
  element && ob.disconnect();
});
</script>

<template>
  <div class="base-mutation-observer" ref="baseMutationObserverRef">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-mutation-observer {
}
</style>
