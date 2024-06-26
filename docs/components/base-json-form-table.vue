<script lang="ts">
export interface BaseJsonFormTableProps {
  prop1?: string;
}
export const BaseJsonFormTableDefault = {};
export interface BaseJsonFormTableEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormTableProps>(), BaseJsonFormTableDefault);
defineEmits<BaseJsonFormTableEmits>();
defineOptions({
  name: 'BaseJsonFormTable',
});
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
  <base-json-form
    :inputs="{
      name: '姓名',
    }"
    :columns="{
      id: '序号',
      name: '姓名',
      age: '年龄',
      address: '地址',
    }"
    :request="request"
  />
</template>

<style scoped lang="scss">
.base-json-form-table {
}
</style>
