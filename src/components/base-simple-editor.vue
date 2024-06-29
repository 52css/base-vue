<script lang="ts">
export interface BaseSimpleEditorProps {
  prop1?: string
}
export const BaseSimpleEditorDefault = {}
export interface BaseSimpleEditorEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseSimpleEditorProps>(), BaseSimpleEditorDefault)
defineEmits<BaseSimpleEditorEmits>()
defineOptions({
  name: 'BaseSimpleEditor',
})
</script>

<template>
  <div class="base-simple-editor">
    base-simple-editor, TODO: 富文本编辑器, 实现可以添加标签
  </div>
</template>

<style scoped lang="scss">
.base-simple-editor {
}
</style>
