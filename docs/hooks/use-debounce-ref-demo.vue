<script lang="ts">
import { useDebounceRef } from '../../src';

export interface UseDebounceRefDemoProps {
  prop1?: string;
}
export const UseDebounceRefDemoDefault = {};
export interface UseDebounceRefDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<UseDebounceRefDemoProps>(), UseDebounceRefDemoDefault);
defineEmits<UseDebounceRefDemoEmits>();
defineOptions({
  name: 'UseDebounceRefDemo',
});
const value = useDebounceRef('');
</script>

<template>
  <input v-model="value" placeholder="请输入文本，value延迟1s才响应" />
  value: {{ value }}
</template>

<style scoped lang="scss">
.use-debounce-ref-demo {
}
</style>
