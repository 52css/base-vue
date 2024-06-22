<script lang="ts">
export interface BaseJsonFormItemDemoProps {
  prop1?: string;
}
export const BaseJsonFormItemDemoDefault = {};
export interface BaseJsonFormItemDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormItemDemoProps>(),
  BaseJsonFormItemDemoDefault
);
defineEmits<BaseJsonFormItemDemoEmits>();
defineOptions({
  name: 'BaseJsonFormItemDemo',
});
</script>

<template>
  <h3>无插槽</h3>
  <base-json-form-item> content </base-json-form-item>
  <h3>全插槽</h3>
  <base-json-form-item>
    <template #top> top </template>
    <template #left> left </template>
    <template #prepend> http:// </template>
    <template #append> .com </template>
    <template #right> right </template>
    <template #bottom> bottom </template>
    content
  </base-json-form-item>
</template>

<style scoped lang="scss">
.base-json-form-item-demo {
}
</style>
