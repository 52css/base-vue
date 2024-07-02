<script lang="ts">
export interface BaseLabelDemoProps {
  prop1?: string;
}
export const BaseLabelDemoDefault = {};
export interface BaseLabelDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseLabelDemoProps>(), BaseLabelDemoDefault);
defineEmits<BaseLabelDemoEmits>();
defineOptions({
  name: 'BaseLabelDemo',
});
</script>

<template>
  <h3>普通标签</h3>
  <base-label>普通标签</base-label>
  <h3>带全标签</h3>
  <base-label sub-label="副标签" tips="提示文案">普通标签</base-label>
</template>

<style scoped lang="scss">
.base-label-demo {
}
</style>
