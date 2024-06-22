<script lang="ts">
import { useEsc } from '../../src';

export interface UseEscDemoProps {
  prop1?: string
}
export const UseEscDemoDefault = {}
export interface UseEscDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<UseEscDemoProps>(), UseEscDemoDefault)
defineEmits<UseEscDemoEmits>()
defineOptions({
  name: 'UseEscDemo',
})

useEsc(() => {
  console.log('esc')
})
</script>

<template>
  <div class="use-esc-demo">
    use-esc-demo
  </div>
</template>

<style scoped lang="scss">
.use-esc-demo {
}
</style>
