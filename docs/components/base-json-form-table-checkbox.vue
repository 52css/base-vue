<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormTableCheckboxProps {
  prop1?: string;
}
export const BaseJsonFormTableCheckboxDefault = {};
export interface BaseJsonFormTableCheckboxEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormTableCheckboxProps>(),
  BaseJsonFormTableCheckboxDefault
);
defineEmits<BaseJsonFormTableCheckboxEmits>();
defineOptions({
  name: 'BaseJsonFormTableCheckbox',
});
const selectedRowKeys = ref([]);
const onSelectChange = (val) => {
  selectedRowKeys.value = val;
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
  选中行: {{ selectedRowKeys }}
  <base-json-form
    :inputs="{
      name: '姓名',
    }"
    :columns="{
      $checkbox: true,
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
