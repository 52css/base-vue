<script lang="ts">
export interface BaseTextDemoProps {
  prop1?: string;
}
export const BaseTextDemoDefault = {};
export interface BaseTextDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseTextDemoProps>(), BaseTextDemoDefault);
defineEmits<BaseTextDemoEmits>();
defineOptions({
  name: 'BaseTextDemo',
});
</script>

<template>
  <h3>只有一行</h3>
  <base-text>只有一行</base-text>
  <h3>多行展示, 超出3行显示省略号</h3>
  <base-text>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi
    minus tempora fugiat deserunt nulla cumque blanditiis cupiditate architecto
    sunt autem debitis nesciunt assumenda sapiente maxime, quis velit sit
    officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
    quasi minus tempora fugiat deserunt nulla cumque blanditiis cupiditate
    architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis velit
    sit officiis!
  </base-text>
  <h3>一行左对其</h3>
  <base-text align="left">只有一行</base-text>
</template>

<style scoped lang="scss">
.base-text-demo {
}
</style>
