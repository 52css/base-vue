<script lang="ts">
import { ref } from 'vue';
import { Tabs as TTabs, TabPanel as TTabPanel } from 'tdesign-vue-next';

export interface BaseJsonFormTabsLeftProps {
  prop1?: string;
}
export const BaseJsonFormTabsLeftDefault = {};
export interface BaseJsonFormTabsLeftEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormTabsLeftProps>(),
  BaseJsonFormTabsLeftDefault
);
defineEmits<BaseJsonFormTabsLeftEmits>();
defineOptions({
  name: 'BaseJsonFormTabsLeft',
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
const tabsValue = ref(0);
const request1 = async (model) => {
  alert(JSON.stringify(model));
};
const request2 = async (model) => {
  alert(JSON.stringify(model));
};
</script>

<template>
  <t-tabs placement="left" v-model="tabsValue">
    <t-tab-panel title="基本信息" :value="0">
      <base-json-form
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
        :request="request1"
      />
    </t-tab-panel>
    <t-tab-panel title="高级信息" :value="1">
      <base-json-form
        :inputs="{
          input1: 'input1',
          input2: 'input2*',
        }"
        :request="request2"
      />
    </t-tab-panel>
  </t-tabs>
</template>

<style scoped lang="scss">
.base-json-form-tabs-left {
}
</style>
