<script lang="ts">
import { ref } from 'vue'
export interface BaseJsonTreeDemoProps {
  prop1?: string;
}
export const BaseJsonTreeDemoDefault = {};
export interface BaseJsonTreeDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonTreeDemoProps>(), BaseJsonTreeDemoDefault);
defineEmits<BaseJsonTreeDemoEmits>();
defineOptions({
  name: 'BaseJsonTreeDemo',
});
const baseJsonTreeRef = ref()
// tdesign 的 actived 是数组，我们不强制修改，保留默认
const treeId = ref([])
const request = async () => {
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
const onBlur = () => {
  baseJsonTreeRef.value.init();
}
</script>

<template>
  <h3>支持搜索，如果没有去除`inputs`即可</h3>
  <base-json-tree
    ref="baseJsonTreeRef"
    v-model:actived="treeId"
    :inputs="{
      name: {
        type: 'Search',
        placeholder: '请输入内容进行搜索',
        onBlur: onBlur
      },
    }"
    :request="request"
  />
</template>

<style scoped lang="scss">
.base-json-tree-demo {
}
</style>
