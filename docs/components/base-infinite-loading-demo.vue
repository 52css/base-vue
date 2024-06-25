<script lang="ts">
export interface BaseInfiniteLoadingDemoProps {
  prop1?: string
}
export const BaseInfiniteLoadingDemoDefault = {}
export interface BaseInfiniteLoadingDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseInfiniteLoadingDemoProps>(), BaseInfiniteLoadingDemoDefault)
defineEmits<BaseInfiniteLoadingDemoEmits>()
defineOptions({
  name: 'BaseInfiniteLoadingDemo',
})
const loadMore = (pagination) => {
  return new Promise((resolve, reject) => {
    if (pagination?.pageNum < 4) {
      const result = {
        total: 60,
        rows: new Array(20).fill(0).map((_item, index) => {
          return {
            id: (pagination?.pageNum - 1) * 20 + index,
            name: `name${(pagination?.pageNum - 1) * 20 + index}`,
          }
        }),
      }
      setTimeout(() => {
        resolve(result)
      }, 500)
    } else {
      reject()
    }
  })
}
</script>

<template>
  <base-infinite-loading
    :load-more="loadMore"
    style="height: 300px; overflow: auto"
  >
    <template #default="{ list }">
      <div class="list">
        <div v-for="item in list" :key="item.id" class="item">
          {{ item.name }}
        </div>
      </div>
    </template>
  </base-infinite-loading>
</template>

<style scoped lang="scss">
.base-infinite-loading-demo {
}
</style>
