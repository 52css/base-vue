<script lang="ts">
export interface BaseSvgHtmlProps {
  width?: number | string;
  height?: number | string;
}
export const BaseSvgHtmlDefault = {
  width: '100%',
  height: '100%',
};
export interface BaseSvgHtmlEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseSvgHtmlProps>(), BaseSvgHtmlDefault);
defineEmits<BaseSvgHtmlEmits>();
defineOptions({
  name: 'BaseSvgHtml',
});
</script>

<template>
  <svg :height="height" :width="width" xmlns="http://www.w3.org/2000/svg">
    <foreignObject height="100%" width="100%" x="0" y="0">
      <body xmlns="http://www.w3.org/1999/xhtml" style="margin: 0; padding: 0;">
        <slot />
      </body>
    </foreignObject>
  </svg>
</template>

<style scoped lang="scss">
.base-svg-html {
}
</style>
