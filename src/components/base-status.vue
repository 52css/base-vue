<script lang="ts">
import { computed } from 'vue';

export type BaseStatusTheme = 'primary' | 'success' | 'danger' | 'default';
export type BaseStatusValue = string | number;
export type BaseStatusOption = {
  label?: string;
  value?: BaseStatusValue;
  theme?: BaseStatusTheme;
};
export type BaseStatusVariant = 'dot' | 'fill' | 'outline' | 'dashed' | 'text';
export interface BaseStatusProps {
  theme?: BaseStatusTheme;
  value?: BaseStatusValue;
  modelValue?: BaseStatusValue;
  options?: BaseStatusOption[];
  variant?: BaseStatusVariant;
}
export const BaseStatusDefault = {
  variant: 'dot' as BaseStatusProps['variant'],
};
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
  success: '#52c41a',
  primary: '#1890ff',
  danger: '#f5222d',
  default: '#d9d9d9',
  warning: '#faad14',
};
const getValue = computed(() => {
  return props.modelValue ?? props.value;
});
const getTheme = computed(() => {
  if (props.theme) {
    return props.theme;
  }
  if (props?.options) {
    return props?.options?.find((x) => x.value === getValue.value)?.theme;
  }
  return 'primary';
});
const color = computed(() => colorMap[getTheme.value as keyof typeof colorMap]);
const getLabel = computed(() => {
  if (props?.options) {
    return props?.options?.find((x) => x.value === getValue.value)?.label;
  }

  return getValue.value;
});
</script>

<template>
  <div class="base-status" :data-variant="variant" :data-theme="getTheme">
    {{ getLabel }}
  </div>
</template>

<style scoped lang="scss">
.base-status {
  --color: v-bind(color);
  font-size: 12px;
  line-height: 1.5;
  &[data-variant='dot'] {
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
  &[data-variant='outline'] {
    padding: 0 4px;
    border: 1px solid var(--color);
    border-radius: 2px;
    color: var(--color);
  }
  &[data-variant='dashed'] {
    padding: 0 4px;
    border: 1px dashed var(--color);
    border-radius: 2px;
    color: var(--color);
  }
  &[data-variant='text'] {
    padding: 0 4px;
    // border: 1px dashed var(--color);
    // border-radius: 2px;
    color: var(--color);
  }
  &[data-theme='default'] {
    color: #1a1a1a;
  }
  &[data-variant='fill'] {
    padding: 0 4px;
    background-color: var(--color);
    border-radius: 2px;
    color: #fff;
  }
}
</style>
