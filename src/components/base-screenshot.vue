<script lang="ts">
export interface BaseScreenshotProps {
  prop1?: string
}
export const BaseScreenshotDefault = {}
export interface BaseScreenshotEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseScreenshotProps>(), BaseScreenshotDefault)
defineEmits<BaseScreenshotEmits>()
defineOptions({
  name: 'BaseScreenshot',
})
</script>

<template>
  <div class="base-screenshot">
    base-screenshot, TODO: 对某个区域转换成svg，再保存图片
  </div>
</template>

<style scoped lang="scss">
.base-screenshot {
}
</style>
