<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormGroupProps {
  prop1?: string;
}
export const BaseJsonFormGroupDefault = {};
export interface BaseJsonFormGroupEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormGroupProps>(), BaseJsonFormGroupDefault);
defineEmits<BaseJsonFormGroupEmits>();
defineOptions({
  name: 'BaseJsonFormGroup',
});
const model = ref({});
const spColorOptions = [
  {
    label: '红色',
    value: 'red',
  },
  {
    label: '黄色',
    value: 'yellow',
  },
];
</script>

<template>
  <base-json-form
    label-align="top"
    :inputs="{
      length: {
        type: 'InputNumber',
        append: 'mm',
        group: ['width', 'left'],
        placeholder: '长',
        theme: 'normal',
        autoWidth: true,
      },
      width: {
        label: '大小',
        requiredMark: true,
        type: 'InputNumber',
        append: 'mm',
        group: ['width'],
        placeholder: '宽',
        theme: 'normal',
        autoWidth: true,
      },
      height: {
        type: 'InputNumber',
        append: 'mm',
        group: ['width', 'right'],
        placeholder: '高',
        theme: 'normal',
        autoWidth: true,
      },
      time: {
        label: '置管时间*',
        type: 'DatePicker',
        group: ['time'],
        disabled: (m: any) => m.timeUnknown,
      },
      timeUnknown: {
        type: 'Checkbox',
        group: ['time', 'right'],
        onChange: (m: any) => {
          if (m.timeUnknown) {
            m.time = undefined;
          }
        },
        children: '不详'
      },
      hasSp: {
        type: 'Switch',
        group: ['spColor', 'left']
      },
      spColor: {
        type: 'Select',
        group: ['spColor'],
        label: '水泡*',
        placeholder: '颜色',
        options: spColorOptions
      }
    }"
    :model="model"
    :span="4"
  />
</template>

<style scoped lang="scss">
.base-json-form-group {
}
</style>
