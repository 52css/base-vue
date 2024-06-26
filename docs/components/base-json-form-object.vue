<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormObjectProps {
  prop1?: string;
}
export const BaseJsonFormObjectDefault = {};
export interface BaseJsonFormObjectEmits {
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
withDefaults(defineProps<BaseJsonFormObjectProps>(), BaseJsonFormObjectDefault);
defineEmits<BaseJsonFormObjectEmits>();
defineOptions({
  name: 'BaseJsonFormObject',
});
const genderOptions = enumToOptions(Gender);
const courseOptions = enumToOptions(Course);
const request = async (model) => {
  console.log('model', model);
  await sleep(1000);
};
const model = ref({
  student: {},
});
// 模拟请求后重新赋值model
setTimeout(() => {
  model.value = {
    student: {
      name: '张三',
      gender: Gender.男,
      course: [Course.语文, Course.数学],
    },
  };
  // model.value['student.name'] = '张三'
}, 200);
</script>

<template>
  <base-json-form
    :inputs="{
      'student.name': '姓名*',
      'student.tel': '手机号码',
      'student.status': {
        label: '接收短信',
        type: 'Switch',
      },
      'student.gender': {
        label: '性别',
        type: 'Radio',
        value: Gender.男,
        options: genderOptions,
      },
      'student.course': {
        label: '课程',
        type: 'CheckboxGroup',
        options: courseOptions,
      },
    }"
    :model="model"
    :request="request"
  />
</template>

<style scoped lang="scss">
.base-json-form-object {
}
</style>
