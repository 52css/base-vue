<script lang="ts">
import { type Component, ref } from 'vue';
import { Tooltip } from 'tdesign-vue-next';
import { HelpCircleIcon } from 'tdesign-icons-vue-next';

export interface BaseLabelProps {
  subLabel?: string;
  tips?: string;
}
export const BaseLabelDefault = {};
export interface BaseLabelEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Tooltip,
  HelpCircleIcon,
};
export const registerBaseLabelComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseLabelProps>(), BaseLabelDefault);
defineEmits<BaseLabelEmits>();
defineOptions({
  name: 'BaseLabel',
});
</script>

<template>
  <div class="base-label" inline-flex items-center gap-1>
    <slot />
    <span c-hex-999>
      <slot v-if="$slots.subLabel" name="subLabel" />
      <template v-else="subLabel">
        {{ subLabel }}
      </template>
    </span>
    <component v-if="$slots.tips || tips" :is="componentMap.Tooltip">
      <component :is="componentMap.HelpCircleIcon" c-hex-999 />
      <template #content>
        <slot v-if="$slots.tips" name="tips" />
        <template v-else="tips">
          {{ tips }}
        </template>
      </template>
    </component>
  </div>
</template>

<style scoped lang="scss">
.base-label {
}
</style>
