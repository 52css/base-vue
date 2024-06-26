<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormLoginProps {
  prop1?: string;
}
export const BaseJsonFormLoginDefault = {};
export interface BaseJsonFormLoginEmits {
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
withDefaults(defineProps<BaseJsonFormLoginProps>(), BaseJsonFormLoginDefault);
defineEmits<BaseJsonFormLoginEmits>();
defineOptions({
  name: 'BaseJsonFormLogin',
});
const baseJsonFormRef = ref();
const onClick = async () => {
  await baseJsonFormRef.value.onSubmit();
};
const request = async (model) => {
  await sleep(1000);
  console.log('model', model);
};
</script>

<template>
  <base-json-form
    ref="baseJsonFormRef"
    :inputs="{
      account: {
        placeholder: '请输入账户名',
        clearable: true,
        required: true,
      },
      password: {
        type: 'Password',
        placeholder: '请输入密码',
        required: true,
      },
    }"
    :label-width="0"
    w-90
    :request="request"
  >
    <template #query>
      <base-button @click="onClick" w-full> 登录 </base-button>
    </template>
  </base-json-form>
</template>

<style scoped lang="scss">
.base-json-form-login {
}
</style>
