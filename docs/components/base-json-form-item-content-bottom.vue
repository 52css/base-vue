<script lang="ts">
export interface BaseJsonFormItemContentBottomProps {
  prop1?: string;
}
export const BaseJsonFormItemContentBottomDefault = {};
export interface BaseJsonFormItemContentBottomEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormItemContentBottomProps>(),
  BaseJsonFormItemContentBottomDefault
);
defineEmits<BaseJsonFormItemContentBottomEmits>();
defineOptions({
  name: 'BaseJsonFormItemContentBottom',
});
</script>

<template>
  <base-json-form-item>
    <label>
      <input type="radio" name="radio" />
      公开
    </label>
    <label>
      <input type="radio" name="radio" />
      部分公开
    </label>
    <label>
      <input type="radio" name="radio" />
      不公开
    </label>
    <template #bottom>
      <span c-hex-999>客户、邀评人默认被分享</span>
    </template>
  </base-json-form-item>
</template>

<style scoped lang="scss">
.base-json-form-item-content-bottom {
}
</style>
