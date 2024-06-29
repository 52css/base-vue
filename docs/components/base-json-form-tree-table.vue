<script lang="ts">
import { ref } from 'vue';
import { Card as TCard } from 'tdesign-vue-next';

export interface BaseJsonFormTreeTableProps {
  prop1?: string;
}
export const BaseJsonFormTreeTableDefault = {};
export interface BaseJsonFormTreeTableEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormTreeTableProps>(),
  BaseJsonFormTreeTableDefault
);
defineEmits<BaseJsonFormTreeTableEmits>();
defineOptions({
  name: 'BaseJsonFormTreeTable',
});
//#region 树
const baseJsonTreeRef = ref();
const treeIdList = ref([]);
const treeRequest = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: '深圳总部',
          value: 1,
          children: [
            {
              label: '采购1组',
              value: 1.1,
            },
            {
              label: '采购2组',
              value: 1.2,
            },
          ],
        },
        {
          label: '技术部',
          value: 2,
          children: [
            {
              label: '前端',
              value: 2.1,
            },
            {
              label: '后端',
              value: 2.2,
            },
            {
              label: '测试',
              value: 2.3,
            },
          ],
        },
      ]);
    }, 200);
  });
};
const onTreeSubmit = () => {
  console.log('submit');
  baseJsonTreeRef.value.init();
};
const onTreeActive = () => {
  baseJsonFormRef.value.init();
};
//#endregion

//#region 表格
const baseJsonFormRef = ref();
const tableRequest = (m: any) => {
  return new Promise((resolve) => {
    // 并且读取 treeIdList[0], 去请求后端
    console.log('正在请求model', m, treeIdList.value);
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
//#endregion
</script>

<template>
  <t-card class="base-json-form-tree-table">
    <section flex>
      <aside w-230px>
        <base-json-tree
          ref="baseJsonTreeRef"
          v-model:actived="treeIdList"
          :inputs="{
            name: {
              type: 'Search',
              placeholder: '请输入内容进行搜索',
              onSubmit: onTreeSubmit,
            },
          }"
          :request="treeRequest"
          @active="onTreeActive"
        />
      </aside>
      <main flex-1 min-w-0>
        <base-json-form
          ref="baseJsonFormRef"
          :inputs="{
            name: {
              placeholder: '请输入姓名',
              type: 'Search',
            },
          }"
          :columns="{
            id: '序号',
            name: '姓名',
            age: '年龄',
            address: '地址',
          }"
          :request="tableRequest"
        />
      </main>
    </section>
  </t-card>
</template>

<style scoped lang="scss">
.base-json-form-tree-table {
}
</style>
