<script lang="ts">
import { ref } from 'vue';
export interface BaseStatusDemoProps {
  prop1?: string;
}
export const BaseStatusDemoDefault = {};
export interface BaseStatusDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseStatusDemoProps>(), BaseStatusDemoDefault);
defineEmits<BaseStatusDemoEmits>();
defineOptions({
  name: 'BaseStatusDemo',
});
const status = ref(2);
</script>

<template>
  <div class="base-status-demo">
    <base-status value="进行中" />

    <base-status
      :value="status"
      :options="[
        { label: '未开始', value: 0, theme: 'default' },
        { label: '进行中', value: 1, theme: 'primary' },
        { label: '已完成', value: 2, theme: 'success' },
        { label: '失败', value: 3, theme: 'error' },
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
.base-status-demo {
}
</style>
