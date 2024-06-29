<script lang="ts">
import { computed } from 'vue';

export type BaseTextAlign = 'left' | 'center';
export interface BaseTextProps {
  align?: BaseTextAlign;
  maxline?: number;
  suffix?: string;
}
export const BaseTextDefault = {
  align: 'left' as BaseTextAlign,
  // maxline: 3,
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
const getStyle = computed(() => {
  if (props.maxline) {
    return {
      '-webkit-line-clamp': props.maxline,
    };
  }
  return {};
});
</script>

<template>
  <div class="base-text" :style="getRootStyle">
    <div class="base-text__container">
      <div class="base-text__suffix">
        {{ suffix }}
      </div>
      <div
        :style="getStyle"
        class="base-text__content"
        :class="[maxline && 'base-text__content--multiple']"
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

  &__suffix {
    color: #666;
    font-size: 14px;
    word-break: break-all;
    float: right;
  }

  &__content {
    color: #666;
    font-size: 14px;
    word-break: break-all;
    &--multiple {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
