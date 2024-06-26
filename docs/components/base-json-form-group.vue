<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormGroupDemoProps {
  prop1?: string;
}
export const BaseJsonFormGroupDemoDefault = {};
export interface BaseJsonFormGroupDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormGroupDemoProps>(),
  BaseJsonFormGroupDemoDefault
);
defineEmits<BaseJsonFormGroupDemoEmits>();
defineOptions({
  name: 'BaseJsonFormGroupDemo',
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
        required: true,
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
        required: true,
      },
      height: {
        type: 'InputNumber',
        append: 'mm',
        group: ['width', 'right'],
        placeholder: '高',
        theme: 'normal',
        autoWidth: true,
        required: true,
      },
      time: {
        label: '置管时间',
        requiredMark: true,
        type: 'DatePicker',
        group: ['time'],
        disabled: (m: any) => m.timeUnknown,
        required: (m: any) => !m.timeUnknown,
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
        group: ['spColor', 'left'],
        onChange: (m: any) => {
          if (!m.hasSp) {
            m.spColor = undefined
          }
        }
      },
      spColor: {
        label: '水泡',
        requiredMark: true,
        type: 'Select',
        group: ['spColor'],
        placeholder: '颜色',
        options: spColorOptions,
        disabled: (m: any) => !m.hasSp,
        required: (m: any) => m.hasSp,
      }
    }"
    :model="model"
    :span="4"
  />
</template>

<style scoped lang="scss">
.base-json-form-group-demo {
}
</style>
