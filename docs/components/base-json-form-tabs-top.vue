<script lang="ts">
import { ref } from 'vue';
import { Tabs as TTabs, TabPanel as TTabPanel } from 'tdesign-vue-next';

export interface BaseJsonFormTabsTopProps {
  prop1?: string;
}
export const BaseJsonFormTabsTopDefault = {};
export interface BaseJsonFormTabsTopEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormTabsTopProps>(),
  BaseJsonFormTabsTopDefault
);
defineEmits<BaseJsonFormTabsTopEmits>();
defineOptions({
  name: 'BaseJsonFormTabsTop',
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
const baseJsonForm1Ref = ref();
const baseJsonForm2Ref = ref();
const onSubmit = async () => {
  const allFormRef = [baseJsonForm1Ref.value, baseJsonForm2Ref.value];
  const allFormValidate = allFormRef.map((x) => x.validate());
  const allValidate = await Promise.all(allFormValidate);
  const allOk = allValidate.every((x) => x === true);

  if (allOk) {
    // 去提交表单
    const allModel = allFormRef
      .map((x) => x.model())
      .reduce((prev, item) => {
        prev = { ...prev, ...item };
        return prev;
      }, {});

    alert(JSON.stringify(allModel));
  } else {
    // 跳转到错误最近的错误tabs
    const index = allValidate.findIndex((x) => x !== true);

    tabsValue.value = index;
  }
};
</script>

<template>
  <t-tabs v-model="tabsValue" theme="card">
    <t-tab-panel label="基本信息" :value="0" :destroy-on-hide="false">
      <base-json-form
        ref="baseJsonForm1Ref"
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
        :show-query="false"
        my-4
      />
    </t-tab-panel>
    <t-tab-panel label="高级信息" :value="1" :destroy-on-hide="false">
      <base-json-form
        ref="baseJsonForm2Ref"
        :inputs="{
          aa: 'aa1',
          bb: 'bb2*',
        }"
        :show-query="false"
        my-4
      />
    </t-tab-panel>
  </t-tabs>
  <section flex items-center justify-center gap-2 my-4>
    <base-button @click="onSubmit">提交</base-button>
    <base-button theme="default">重置</base-button>
  </section>
</template>

<style scoped lang="scss">
.base-json-form-tabs-left {
}
</style>
