<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormValueProps {
  prop1?: string;
}
export const BaseJsonFormValueDefault = {};
export interface BaseJsonFormValueEmits {
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
withDefaults(defineProps<BaseJsonFormValueProps>(), BaseJsonFormValueDefault);
defineEmits<BaseJsonFormValueEmits>();
defineOptions({
  name: 'BaseJsonFormValue',
});

// 性别
const genderOptions = enumToOptions(Gender);
const courseOptions = enumToOptions(Course);
const request = async (model) => {
  await sleep(1000);
  console.log('model', model);
};

const model = ref({});
// 模拟请求后重新赋值model
setTimeout(() => {
  model.value = {
    name: '张三',
    gender: Gender.男,
    course: [Course.语文, Course.数学],
  };
}, 200)
</script>

<template>
  <h3>通过`input`项的`value`赋值</h3>
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
        value: Gender.男,
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
  <h3>通过`model`赋值</h3>
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
    :model="model"
  />
</template>

<style scoped lang="scss">
.base-json-form-value {
}
</style>
