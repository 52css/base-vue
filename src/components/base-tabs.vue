<script lang="ts">
export interface BaseTabsProps {
  prop1?: string
}
export const BaseTabsDefault = {}
export interface BaseTabsEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseTabsProps>(), BaseTabsDefault)
defineEmits<BaseTabsEmits>()
defineOptions({
  name: 'BaseTabs',
})
</script>

<template>
  <div class="base-tabs">
    base-tabs
  </div>
</template>

<style scoped lang="scss">
.base-tabs {
}
</style>
