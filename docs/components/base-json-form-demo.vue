<script lang="ts">
export interface BaseJsonFormDemoProps {
  prop1?: string;
}
export const BaseJsonFormDemoDefault = {};
export interface BaseJsonFormDemoEmits {
  (event: 'event1'): void;
}
export const sleep = (time: number = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
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
const courseOptions = [
  { label: '语文', value: 1 },
  { label: '数学', value: 2 },
  { label: '英语', value: 3 },
];
const request = async (model) => {
  await sleep(1000);
  console.log('model', model);
};
</script>

<template>
  <base-json-form
    :inputs="{
      name: '姓名*',
      tel: '手机号码',
      status: {
        label: '接收短信',
        type: 'Switch',
      },
      gender: {
        label: '性别',
        type: 'Radio',
        options: genderOptions,
      },
      course: {
        label: '课程',
        type: 'Checkbox',
        options: courseOptions,
      },
    }"
    :request="request"
  />
</template>

<style scoped lang="scss">
.base-json-form-demo {
}
</style>
