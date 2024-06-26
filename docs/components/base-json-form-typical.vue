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
export enum Gender {
  男 = 1,
  女 = 2,
}
export enum Course {
  语文 = 1,
  数学 = 2,
  英语 = 3,
}
export type Option = { label: string; value: number | string };
export const enumToOptions = (enumObj: any): Option[] => {
  return Object.keys(enumObj)
    .filter((key) => isNaN(Number(key))) // 过滤掉数字键
    .map((key) => ({
      label: key,
      value: enumObj[key as keyof typeof enumObj],
    }));
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormDemoProps>(), BaseJsonFormDemoDefault);
defineEmits<BaseJsonFormDemoEmits>();
defineOptions({
  name: 'BaseJsonFormDemo',
});
const genderOptions = enumToOptions(Gender);
const courseOptions = enumToOptions(Course);
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
        type: 'CheckboxGroup',
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
