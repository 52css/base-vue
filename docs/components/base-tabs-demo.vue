<script lang="ts">
export interface BaseTabsDemoProps {
  prop1?: string;
}
export const BaseTabsDemoDefault = {};
export interface BaseTabsDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseTabsDemoProps>(), BaseTabsDemoDefault);
defineEmits<BaseTabsDemoEmits>();
defineOptions({
  name: 'BaseTabsDemo',
});
const select1Options = [
  {
    label: '选项1',
    value: '选项1',
  },
  {
    label: '选项2',
    value: '选项2',
  },
];
const cascader1Options = [
  {
    label: '选项一',
    value: '1',
    children: [
      { label: '子选项一', value: '1.1' },
      { label: '子选项二', value: '1.2' },
    ],
  },
  {
    label: '选项二',
    value: '2',
    children: [
      { label: '子选项三', value: '2.1' },
      { label: '子选项四', value: '2.2' },
    ],
  },
];
const radio1Options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
];
const checkbox1Options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
];
</script>

<template>
  <!-- <base-json-form
    :inputs="{
      input1: '普通输入框',
      select1: {
        label: '下拉框',
        type: 'Select',
        options: select1Options,
      },
      cascader1: {
        label: '级联选择',
        type: 'Cascader',
        options: cascader1Options,
      },
      textarea1: {
        label: '备注/详细地址',
        type: 'Textarea',
      },
      date1: {
        label: '单个日期选择',
        type: 'DatePicker',
      },
      dateRange1: {
        label: '时间段选择',
        type: 'DateRangePicker',
      },
      radio1: {
        label: '单选框',
        type: 'Radio',
        options: radio1Options,
      },
      checkbox1: {
        label: '多选框',
        type: 'Checkbox',
        options: checkbox1Options,
      },
    }"
  /> -->

  <base-tabs>
    <p>This is slot content 1</p>
    <p>This is slot content 2</p>
  </base-tabs>
</template>

<style scoped lang="scss">
.base-tabs-demo {
}
</style>
