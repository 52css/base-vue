<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormTableRadioProps {
  prop1?: string;
}
export const BaseJsonFormTableRadioDefault = {};
export interface BaseJsonFormTableRadioEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormTableRadioProps>(),
  BaseJsonFormTableRadioDefault
);
defineEmits<BaseJsonFormTableRadioEmits>();
defineOptions({
  name: 'BaseJsonFormTableRadio',
});
const selectedRowKey = ref();
const onSelectChange = (val) => {
  selectedRowKey.value = val?.[0];
};
const request = (m: any) => {
  return new Promise((resolve) => {
    console.log('正在请求model', m);
    setTimeout(() => {
      resolve({
        total: 100,
        rows: Array(m.pageSize)
          .fill(0)
          .map((_, index) => {
            index = index + m.pageSize * (m.pageNum - 1);
            return {
              id: index,
              name: `name${index}`,
              age: 18 + index,
              address: `address${index}`,
            };
          }),
      });
    }, 200);
  });
};
</script>

<template>
  选中行: {{ selectedRowKey }}
  <base-json-form
    :inputs="{
      name: '姓名',
    }"
    :columns="{
      $radio: true,
      id: '序号',
      name: '姓名',
      age: '年龄',
      address: '地址',
    }"
    :request="request"
    row-key="id"
    @select-change="onSelectChange"
  />
</template>

<style scoped lang="scss">
.base-json-form-table {
}
</style>
