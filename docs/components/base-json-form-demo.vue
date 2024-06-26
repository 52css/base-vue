<script lang="ts">
export interface BaseJsonFormDemoProps {
  prop1?: string;
}
export const BaseJsonFormDemoDefault = {};
export interface BaseJsonFormDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormDemoProps>(), BaseJsonFormDemoDefault);
defineEmits<BaseJsonFormDemoEmits>();
defineOptions({
  name: 'BaseJsonFormDemo',
});
// 性别
const genderOptions = [
  { label: '男', value: 1 },
  { label: '女', value: 2 },
];
</script>

<template>
  <base-json-form
    :inputs="{
      input1: '姓名',
      input2: '姓名*',
      select1: {
        label: '性别',
        type: 'Select',
        options: genderOptions,
      },
      radio1: {
        label: '性别',
        type: 'Radio',
        options: genderOptions,
      }
    }"
  />
</template>

<style scoped lang="scss">
.base-json-form-demo {
}
</style>
