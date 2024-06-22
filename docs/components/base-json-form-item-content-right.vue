<script lang="ts">
export interface BaseJsonFormItemContentRightProps {
  prop1?: string;
}
export const BaseJsonFormItemContentRightDefault = {};
export interface BaseJsonFormItemContentRightEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormItemContentRightProps>(),
  BaseJsonFormItemContentRightDefault
);
defineEmits<BaseJsonFormItemContentRightEmits>();
defineOptions({
  name: 'BaseJsonFormItemContentRight',
});
</script>

<template>
  <base-json-form-item>
    <input
      placeholder="请输入"
      style="border-bottom: 1px solid #000; width: 100%"
    />
    <template #right>
      <label flex items-center>
        <input type="checkbox" />
        选中
      </label>
    </template>
  </base-json-form-item>
</template>

<style scoped lang="scss">
.base-json-form-item-content-right {
}
</style>
