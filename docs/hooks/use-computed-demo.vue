<script lang="ts">
import { ref } from 'vue';
import { Table as TTable, InputNumber as TInputNumber } from 'tdesign-vue-next';
import { useComputed } from '../../src';

export interface UseComputedDemoProps {
  prop1?: string;
}
export const UseComputedDemoDefault = {};
export interface UseComputedDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<UseComputedDemoProps>(), UseComputedDemoDefault);
defineEmits<UseComputedDemoEmits>();
defineOptions({
  name: 'UseComputedDemo',
});
const columns = [
  { colKey: 'name', title: '蔬菜' },
  { colKey: 'price', title: '单价' },
  { colKey: 'count', title: '数量' },
  { colKey: 'total', title: '总价' },
];
const data = ref([
  {
    name: '香蕉',
    price: 2.98,
    count: 3,
  },
  {
    name: '西瓜',
    price: 3.98,
    count: 1,
  },
  {
    name: '苹果',
    price: 9.98,
    count: 5,
  },
]);
const totalPrice = row => {
  console.log('computed')
  return +(row.price * row.count).toFixed(2);
};
const getTotalPrice = useComputed(totalPrice)
</script>

<template>
  <div class="use-computed-ref-demo">use-computed-ref-demo</div>
  <t-table :columns="columns" :data="data">
    <template #count="{row}">
      <t-input-number v-model="row.count" />
    </template>
    <template #total="{row}">
      {{ getTotalPrice(row) }}
    </template>
  </t-table>
</template>

<style scoped lang="scss">
.use-computed-ref-demo {
}
</style>
