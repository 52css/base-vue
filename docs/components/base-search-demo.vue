<script lang="ts">
import { ref } from 'vue'
export interface BaseSearchDemoProps {
  prop1?: string
}
export const BaseSearchDemoDefault = {}
export interface BaseSearchDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseSearchDemoProps>(), BaseSearchDemoDefault)
defineEmits<BaseSearchDemoEmits>()
defineOptions({
  name: 'BaseSearchDemo',
})
const value = ref()
const onSubmit= () => {
  console.log('onSubmit', value.value)
}
</script>

<template>
  value: {{ value }}
  <base-search v-model="value" @submit="onSubmit" />
</template>

<style scoped lang="scss">
.base-search-demo {
}
</style>
