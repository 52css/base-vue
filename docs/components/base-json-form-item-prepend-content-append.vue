<script lang="ts">
export interface BaseJsonFormItemPrependContentAppendProps {
  prop1?: string;
}
export const BaseJsonFormItemPrependContentAppendDefault = {};
export interface BaseJsonFormItemPrependContentAppendEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormItemPrependContentAppendProps>(),
  BaseJsonFormItemPrependContentAppendDefault
);
defineEmits<BaseJsonFormItemPrependContentAppendEmits>();
defineOptions({
  name: 'BaseJsonFormItemPrependContentAppend',
});
</script>

<template>
  <base-json-form-item>
    <template #prepend> http:// </template>
    <template #append> .com </template>
    <input placeholder="请输入" style="width: 100%" />
  </base-json-form-item>
</template>

<style scoped lang="scss">
.base-json-form-item-prepend-content-append {
}
</style>
