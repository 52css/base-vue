<script lang="ts">
import { computed } from 'vue';

export type BaseTextAlign = 'left' | 'center';
export interface BaseTextProps {
  align?: BaseTextAlign;
  maxline?: number;
}
export const BaseTextDefault = {
  align: 'center' as BaseTextAlign,
  maxline: 3,
};
export interface BaseTextEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BaseTextProps>(), BaseTextDefault);
defineEmits<BaseTextEmits>();
defineOptions({
  name: 'BaseText',
});
const getRootStyle = computed(() => {
  const justifyContentMap = {
    left: 'start',
    center: 'center',
  };
  const justifyContent = justifyContentMap[props.align];
  return {
    'justify-content': justifyContent,
  };
});
</script>

<template>
  <div class="base-text" :style="getRootStyle">
    <div class="base-text__container">
      <div
        :style="{
          '-webkit-line-clamp': maxline,
        }"
        class="base-text__content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-text {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  // text-align: center;

  &__container {
    display: inline-block;
    text-align: left;
  }

  &__content {
    display: -webkit-box;
    overflow: hidden;
    color: #666;
    font-size: 14px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
