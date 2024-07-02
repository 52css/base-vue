<script lang="ts">
export interface BaseSvgHtmlDemoProps {
  prop1?: string;
}
export const BaseSvgHtmlDemoDefault = {};
export interface BaseSvgHtmlDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseSvgHtmlDemoProps>(), BaseSvgHtmlDemoDefault);
defineEmits<BaseSvgHtmlDemoEmits>();
defineOptions({
  name: 'BaseSvgHtmlDemo',
});
</script>

<template>
  <h3>支持内链样式以及style加载样式</h3>
  <base-svg-html width="300" height="100">
    <component is="style">
      .svg-html-demo1 { background: green; color: #fff; }
    </component>
    <div class="svg-html-demo1 ">这个是普通html，但是外包裹在svg下</div>
  </base-svg-html>
</template>

<style scoped lang="scss">
.base-svg-html-demo {
}
</style>
