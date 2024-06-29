<script lang="ts">
import { ref } from 'vue';
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
const align = ref(true);
const toggle = ref(false);
</script>

<template>
  <h3>只有一行居中对其 + 多行局左对其</h3>
  <label> <input v-model="toggle" type="checkbox" /> 多行 </label>
  <label> <input v-model="align" type="checkbox" /> 居中 </label>
  <base-text :align="align ? 'center' : 'left'">
    只有一行
    <template v-if="toggle">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi
      minus tempora fugiat deserunt nulla cumque blanditiis cupiditate
      architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis
      velit sit officiis!Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Laborum quasi minus tempora fugiat deserunt nulla cumque blanditiis
      cupiditate architecto sunt autem debitis nesciunt assumenda sapiente
      maxime, quis velit sit officiis!
    </template>
  </base-text>
  <h3>多行省略号</h3>
  <base-text :maxline="3">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi
    minus tempora fugiat deserunt nulla cumque blanditiis cupiditate architecto
    sunt autem debitis nesciunt assumenda sapiente maxime, quis velit sit
    officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
    quasi minus tempora fugiat deserunt nulla cumque blanditiis cupiditate
    architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis velit
    sit officiis!
  </base-text>
  <h3>资源省略号</h3>
  <div w-200px>
    <base-text :maxline="1" suffix=".jpg">
      fsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdf
    </base-text>
    <base-text :maxline="1" suffix=".jpg">
      abc
    </base-text>
  </div>
</template>

<style scoped lang="scss">
.base-text-demo {
}
</style>
