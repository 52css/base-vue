<script lang="ts">
import { ref } from 'vue';
import { useAsyncRef } from '../../src';
export interface UseAsyncRefDemoProps {
  prop1?: string;
}
export const UseAsyncRefDemoDefault = {};
export interface UseAsyncRefDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<UseAsyncRefDemoProps>(), UseAsyncRefDemoDefault);
defineEmits<UseAsyncRefDemoEmits>();
defineOptions({
  name: 'UseAsyncRefDemo',
});
const ajax1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('ajax1');
    }, 1000);
  });
// 加载数据，并且设置数据为响应数据
const data = useAsyncRef(ajax1);

// 不自动加载数据，通过操作设置数据
const [data2, setData2] = useAsyncRef(ajax1, {
  autoFetch: false,
});

// 调用待参数
const fetchUserById = (id) => new Promise((resolve) => setTimeout(() => resolve(id), 200));
const [user, setUser] = useAsyncRef(fetchUserById, { autoFetch: false });
const id = ref(0)
const onClick3 = () => {
  id.value += 1;
  setUser(id.value);
};
</script>

<template>
  <div>data: {{ data }}</div>
  <div @click="setData2">data2: {{ data2 }}, 点击加载数据</div>
  <div @click="onClick3">user: {{ user }}, 点击加载数据</div>
</template>

<style scoped lang="scss">
.use-fetch-demo {
}
</style>
