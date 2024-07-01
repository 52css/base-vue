<script lang="ts">
import { ref } from 'vue'
export interface BaseFormulaDemoProps {
  prop1?: string
}
export const BaseFormulaDemoDefault = {}
export interface BaseFormulaDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseFormulaDemoProps>(), BaseFormulaDemoDefault)
defineEmits<BaseFormulaDemoEmits>()
defineOptions({
  name: 'BaseFormulaDemo',
})
const value = ref('富文本编辑器, 实现可以添加标签<hr data-content="瞳孔" contenteditable="false" />')
</script>

<template>
  <base-formula :tag-list="['瞳孔', '心率']" v-model="value" />
</template>

<style scoped lang="scss">
.base-formula-demo {
}
</style>
