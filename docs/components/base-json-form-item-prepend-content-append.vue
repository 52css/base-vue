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
  <section flex flex-col gap-2>
    <base-json-form-item>
      <template #prepend> http:// </template>
      <template #append> .com </template>
      <input placeholder="请输入" style="width: 100%" />
    </base-json-form-item>
    <base-json-form-item>
      <template #prepend> http:// </template>
      <input placeholder="请输入" style="width: 100%" />
    </base-json-form-item>
    <base-json-form-item>
      <template #append> .com </template>
      <input placeholder="请输入" style="width: 100%" />
    </base-json-form-item>
  </section>
</template>

<style scoped lang="scss">
.base-json-form-item-prepend-content-append {
}
</style>
