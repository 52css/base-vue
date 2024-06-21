<script lang="ts">
import { ref } from 'vue';
export interface BaseIntersectionDemoProps {
  prop1?: string;
}
export const BaseIntersectionDemoDefault = {};
export interface BaseIntersectionDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseIntersectionDemoProps>(),
  BaseIntersectionDemoDefault
);
defineEmits<BaseIntersectionDemoEmits>();
defineOptions({
  name: 'BaseIntersectionDemo',
});
const disabled = ref(false);
const width = ref(0);
const height = ref(0);
const onObserver = (entry) => {
  const rect = entry.contentRect;
  width.value = rect.width;
  height.value = rect.height;
};
</script>

<template>
  <header>
    <label>
      disabled:
      <input type="checkbox" v-model="disabled" />
    </label>
  </header>

  <base-resize-observer
    :disabled="disabled"
    @observer="onObserver"
    style="
      resize: both;
      cursor: ew-resize;
      overflow: hidden;
      border: 1px solid red;
    "
  >
    width: {{ width }} height: {{ height }}
  </base-resize-observer>
</template>

<style scoped lang="scss">
.base-intersection-demo {
}
</style>
