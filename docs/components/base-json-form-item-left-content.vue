<script lang="ts">
export interface BaseJsonFormItemLeftContentProps {
  prop1?: string;
}
export const BaseJsonFormItemLeftContentDefault = {};
export interface BaseJsonFormItemLeftContentEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormItemLeftContentProps>(),
  BaseJsonFormItemLeftContentDefault
);
defineEmits<BaseJsonFormItemLeftContentEmits>();
defineOptions({
  name: 'BaseJsonFormItemLeftContent',
});
</script>

<template>
  <base-json-form-item>
    <input
      placeholder="请输入"
      style="border-bottom: 1px solid #000; width: 100%"
    />
    <template #left>
      <select style="border: 1px solid #000">
        <option>选项1</option>
        <option>选项2</option>
      </select>
    </template>
  </base-json-form-item>
</template>

<style scoped lang="scss">
.base-json-form-item-left-content {
}
</style>
