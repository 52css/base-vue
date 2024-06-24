<script lang="ts">
export interface BaseButtonDemoProps {
  prop1?: string;
}
export const BaseButtonDemoDefault = {};
export interface BaseButtonDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseButtonDemoProps>(), BaseButtonDemoDefault);
defineEmits<BaseButtonDemoEmits>();
defineOptions({
  name: 'BaseButtonDemo',
});
const onClick = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
</script>

<template>
  <h3>普通按钮</h3>
  <base-button @click="onClick"> 这个是一个额按钮 </base-button>

  <h3>删除按钮</h3>
  <base-button theme="danger" confirm="确定删除吗" @click="onClick">
    删除
  </base-button>
</template>

<style scoped lang="scss">
.base-button-demo {
}
</style>
