<script lang="ts">
import { computed } from 'vue';

export type BaseStatusTheme = 'primary' | 'success' | 'danger' | 'default';
export type BaseStatusValue = string | number;
export type BaseStatusOption = {
  label?: string;
  value?: BaseStatusValue;
  modelValue?: BaseStatusValue;
  theme?: BaseStatusTheme;
};
export interface BaseStatusProps {
  theme?: BaseStatusTheme;
  value?: BaseStatusValue;
  options?: BaseStatusOption[];
}
export const BaseStatusDefault = {};
export interface BaseStatusEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BaseStatusProps>(), BaseStatusDefault);
defineEmits<BaseStatusEmits>();
defineOptions({
  name: 'BaseStatus',
});

const colorMap = {
  success: '#2BA471',
  primary: '#0072FF',
  danger: '#D54941',
  default: 'rgba(0, 0, 0, 0.40)',
};
const getTheme = computed(() => {
  if (props.theme) {
    return props.theme;
  }
  if (props?.options) {
    return props?.options?.find((x) => x.value === props.value)?.theme;
  }
  return 'primary';
});
const color = computed(() => colorMap[getTheme.value as keyof typeof colorMap]);
const getLabel = computed(() => {
  if (props?.options) {
    return props?.options?.find((x) => x.value === props.value)?.label;
  }

  return props.value;
});
</script>

<template>
  <div class="base-status">
    {{ getLabel }}
  </div>
</template>

<style scoped lang="scss">
.base-status {
  --color: v-bind(color);
  position: relative;
  padding-left: 10px;
  color: var(--color);

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 6px;
    height: 6px;
    background: var(--color);
    border-radius: 50%;
    transform: translateY(-50%);
    content: '';
  }
}
</style>
