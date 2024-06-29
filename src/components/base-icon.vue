<script lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { isNumber } from 'lodash-es';

export interface BaseIconProps {
  name?: string;
  size?: string | number;
  width?: string | number; // 优先级比size高
  height?: string | number; // 优先级比size高
}
export interface BaseIconSlots {
  default: void;
}
export const BaseIconDefault = {
  size: '16', // 没有单位，单位为px
};
export interface BaseIconEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BaseIconProps>(), BaseIconDefault);
defineEmits<BaseIconEmits>();
defineSlots<BaseIconSlots>();
defineOptions({
  name: 'BaseIcon',
});
const getDynamicComponent = computed(() => {
  const name = props.name;

  return defineAsyncComponent(() => import(`../assets/icons/${name}.svg`));
});
const getSize = computed(() => {
  return isNumber(props.size) ? props.size + 'px' : props.size;
});
const getWidth = computed(() => {
  if (props.width) {
    return isNumber(props.width) ? props.width + 'px' : props.width;
  }
  return getSize.value;
});
const getHeight = computed(() => {
  if (props.height) {
    return isNumber(props.height) ? props.height + 'px' : props.height;
  }
  return getSize.value;
});
</script>

<template>
  <div
    class="base-icon"
    cursor-pointer
    flex-inline
    flex-nowrap
    gap-2
    items-center
    ws-nowrap
  >
    <component
      :is="getDynamicComponent"
      v-if="name"
      :height="getHeight"
      :width="getWidth"
    />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-icon {
}
</style>
