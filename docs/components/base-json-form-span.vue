<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormSpanProps {
  prop1?: string;
}
export const BaseJsonFormSpanDefault = {};
export interface BaseJsonFormSpanEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormSpanProps>(), BaseJsonFormSpanDefault);
defineEmits<BaseJsonFormSpanEmits>();
defineOptions({
  name: 'BaseJsonFormSpan',
});
const span = ref(12);
</script>

<template>
  <section flex items-center>
    <input type="range" min="1" max="12" v-model="span" /> {{ span }}
  </section>

  <base-json-form
    label-align="top"
    :span="span"
    :inputs="{
      input1: '测试1',
      input2: '测试2',
      input3: '测试3',
      input4: '测试4',
      input5: '测试5',
      input6: {
        label: '测试6',
        span: 12, // 永远1行
      },
    }"
  />
</template>

<style scoped lang="scss">
.base-json-form-span {
}
</style>
