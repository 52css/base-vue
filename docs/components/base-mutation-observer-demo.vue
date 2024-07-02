<script lang="ts">
import { ref } from 'vue'
export interface BaseMutationObserverDemoProps {
  prop1?: string
}
export const BaseMutationObserverDemoDefault = {}
export interface BaseMutationObserverDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseMutationObserverDemoProps>(), BaseMutationObserverDemoDefault)
defineEmits<BaseMutationObserverDemoEmits>()
defineOptions({
  name: 'BaseMutationObserverDemo',
})
const onObserver = () => {
  console.log('有变更')
}
const list = ref([1, 2, 3])
</script>

<template>
  <h3>查看console查看信息</h3>
  <base-mutation-observer class="base-mutation-observer-demo" @observer="onObserver">
    <ul>
      <li v-for="(item, itemIndex) in list" :key="item">
        {{ item }}
        <span @click="() => list.splice(itemIndex, 1)">删除</span>
      </li>
    </ul>
  </base-mutation-observer>
</template>

<style scoped lang="scss">
.base-mutation-observer-demo {
}
</style>
