<script lang="ts">
export interface BaseIconDemoProps {
  prop1?: string
}
export const BaseIconDemoDefault = {}
export interface BaseIconDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseIconDemoProps>(), BaseIconDemoDefault)
defineEmits<BaseIconDemoEmits>()
defineOptions({
  name: 'BaseIconDemo',
})
</script>

<template>
  <h3>展示图标</h3>
  <base-icon name="add" />
  <base-icon name="bug" />

  <h3>支持显示文字</h3>
  <base-icon name="add"> 添加用户 </base-icon>
</template>

<style scoped lang="scss">
.base-icon-demo {
}
</style>
