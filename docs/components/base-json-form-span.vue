<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormSpanProps {
  prop1?: string;
}
export const BaseJsonFormSpanDefault = {};
export interface BaseJsonFormSpanEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormSpanProps>(), BaseJsonFormSpanDefault);
defineEmits<BaseJsonFormSpanEmits>();
defineOptions({
  name: 'BaseJsonFormSpan',
});
const span = ref(12);
</script>

<template>
  <input type="range" min="1" max="12" v-model="span" />

  <base-json-form />
</template>

<style scoped lang="scss">
.base-json-form-span {
}
</style>
