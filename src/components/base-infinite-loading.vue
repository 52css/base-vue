<script lang="ts">
import { ref } from 'vue'
export interface BaseInfiniteLoadingPagination {
  /** 当前记录起始索引 */
  pageNum?: number | null
  /** 每页显示记录数 */
  pageSize?: number | null
}

export interface BaseInfiniteLoadingProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadMore?: (pagination?: BaseInfiniteLoadingPagination) => Promise<any>
}
export const BaseInfiniteLoadingDefault = {
  loadMore: () => Promise.resolve(),
}
export interface BaseInfiniteLoadingEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseInfiniteLoadingProps>(),
  BaseInfiniteLoadingDefault
)
defineEmits<BaseInfiniteLoadingEmits>()
defineOptions({
  name: 'BaseInfiniteLoading',
})
const list = ref([])
const loading = ref(false)
const noData = ref(false)
const noMore = ref(false)
const pagination = ref<BaseInfiniteLoadingPagination>({
  pageNum: 1,
  pageSize: 20,
})
const total = ref(0)
const onEnter = async () => {
  if (loading.value) {
    return
  }
  if (noMore.value) {
    return
  }

  loading.value = true
  return props.loadMore(pagination.value).then((res) => {
    total.value = res.total
    noData.value = res.total === 0 && pagination.value.pageNum === 1
    if (pagination.value.pageNum === 1) {
      list.value = [].concat(res.rows)
    } else {
      list.value = list.value.concat(res.rows)
    }
    noMore.value = list.value.length >= res.total
    if (!noMore.value) {
      pagination.value.pageNum = pagination.value.pageNum! + 1
    }
    loading.value = false
  })
}

defineExpose({
  init() {
    pagination.value.pageNum = 1
    noMore.value = false
    noData.value = false
    onEnter()
  },
})
</script>

<template>
  <div class="base-infinite-loading">
    <template v-if="noData">
      暂无数据
    </template>
    <template v-else>
      <div class="base-infinite-loading__list">
        <slot :list="list" />
      </div>
      <base-intersection-observer
        class="base-infinite-loading__loading secondary"
        font-size-3
        text-center
        @enter="onEnter"
      >
        {{ noMore ? '没有更多了' : '加载中...' }}
      </base-intersection-observer>
    </template>
  </div>
</template>

<style scoped lang="scss">
.base-infinite-loading {
}
</style>
