<script lang="ts">
export interface BaseJsonFormDemoProps {
  prop1?: string
}
export const BaseJsonFormDemoDefault = {}
export interface BaseJsonFormDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormDemoProps>(), BaseJsonFormDemoDefault)
defineEmits<BaseJsonFormDemoEmits>()
defineOptions({
  name: 'BaseJsonFormDemo',
})
</script>

<template>
  <base-json-form />
</template>

<style scoped lang="scss">
.base-json-form-demo {
}
</style>
