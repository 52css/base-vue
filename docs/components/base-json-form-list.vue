<script lang="ts">
export interface BaseJsonFormCardProps {
  prop1?: string
}
export const BaseJsonFormCardDefault = {}
export interface BaseJsonFormCardEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormCardProps>(), BaseJsonFormCardDefault)
defineEmits<BaseJsonFormCardEmits>()
defineOptions({
  name: 'BaseJsonFormCard',
})
const request = (m: any) => {
  return new Promise((resolve) => {
    console.log('正在请求model', m);
    setTimeout(() => {
      resolve({
        total: 20,
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
    list-type="list"
  >
    <template #list="{data}">
      <section flex flex-wrap gap-3>
        <div v-for="item in data" :key="item.id" bg-hex-eee rd-2 p-2 w-300px>
          {{ item }}
        </div>
      </section>
    </template>
  </base-json-form>
</template>

<style scoped lang="scss">
.base-json-form-card {
}
</style>
