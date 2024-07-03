<script lang="ts">
import { useDebounce } from '../../src';

export interface UseDebounceDemoProps {
  prop1?: string;
}
export const UseDebounceDemoDefault = {};
export interface UseDebounceDemoEmits {
  (event: 'event1'): void;
}
</script>``
<script setup lang="ts">
withDefaults(defineProps<UseDebounceDemoProps>(), UseDebounceDemoDefault);
defineEmits<UseDebounceDemoEmits>();
defineOptions({
  name: 'UseDebounceDemo',
});
const value = useDebounce('');
</script>

<template>
  <input v-model="value" placeholder="请输入文本，value延迟1s才响应" />
  value: {{ value }}
</template>

<style scoped lang="scss">
.use-debounce-ref-demo {
}
</style>
