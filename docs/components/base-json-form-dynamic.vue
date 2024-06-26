<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormDynamicProps {
  prop1?: string;
}
export const BaseJsonFormDynamicDefault = {};
export interface BaseJsonFormDynamicEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormDynamicProps>(),
  BaseJsonFormDynamicDefault
);
defineEmits<BaseJsonFormDynamicEmits>();
defineOptions({
  name: 'BaseJsonFormDynamic',
});
const input2Options = [
  {
    label: 'test2-1',
    value: 'test2-1',
  },
  {
    label: 'test2-2',
    value: 'test2-2',
  },
  {
    label: 'test2-3',
    value: 'test2-3',
  },
];
const input3Options = [
  {
    label: 'test3-1',
    value: 'test3-1',
  },
  {
    label: 'test3-2',
    value: 'test3-2',
  },
  {
    label: 'test3-3',
    value: 'test3-3',
  },
];
const input4Options = [
  {
    label: 'test4-1',
    value: 'test4-1',
  },
  {
    label: 'test4-2',
    value: 'test4-2',
  },
  {
    label: 'test4-3',
    value: 'test4-3',
  },
];
const model = ref({
  input1: '',
  input2: 'test2-1',
  input3: ['test3-1', 'test3-2'],
  input4: 'test4-1',
});
const request = (model) => {
  console.log('model', model)
}
</script>

<template>
  <base-json-form
    :inputs="{
      input1: 'test1*',
      input2: {
        if: (m: any) => m.input1 === 'test1',
        type: 'Select',
        label: 'test2',
        options: input2Options,
      },
      input3: {
        if: (m: any) => m.input1 !== 'test1',
        type: 'CheckboxGroup',
        label: 'test3',
        options: input3Options
      },
      input4: {
        if: (m: any) => m.input1 !== 'test1' && m.input3?.includes('test3-1'),
        type: 'Radio',
        label: 'test4',
        options: input4Options
      }
    }"
    :model="model"
    :request="request"
  />
</template>

<style scoped lang="scss">
.base-json-form-dynamic {
}
</style>
