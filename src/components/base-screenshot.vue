<script lang="ts">
import { ref } from 'vue';
export interface BaseScreenshotProps {
  width?: number | string;
  height?: number | string;
}
export const BaseScreenshotDefault = {};
export interface BaseScreenshotEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseScreenshotProps>(),
  BaseScreenshotDefault
);
defineEmits<BaseScreenshotEmits>();
defineOptions({
  name: 'BaseScreenshot',
});
const baseScreenshotRef = ref();
const screenshot = () => {
  const img = new Image();
  img.crossOrigin = 'Anonymous'; // 允许跨域请求
  const svg = baseScreenshotRef.value.innerHTML;
  // const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  // const url = URL.createObjectURL(svgBlob);

  img.onload = () => {
    // debugger;
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);
    }
    // URL.revokeObjectURL(url);

    // Create a link element and simulate a click to download the image
    const link = document.createElement('a');
    const quality = 0.8;
    link.href = canvas.toDataURL('image/jpeg', quality);
    link.download = 'dom-image.png';
    link.click();
  };
  img.onerror = (err) => {
    console.log('err', err);
  };

  // console.log('url', url);

  const url =
    'data:image/svg+xml;charset=utf-8,' +
    svg.replace(/\n/g, '').replace(/\t/g, '').replace(/#/g, '%23');

  img.src = url;
};
defineExpose({
  screenshot,
});
</script>

<template>
  <div ref="baseScreenshotRef" class="base-screenshot">
    <svg :height="height" :width="width" xmlns="http://www.w3.org/2000/svg">
      <foreignObject height="100%" width="100%" x="0" y="0">
        <body xmlns="http://www.w3.org/1999/xhtml">
          <slot />
        </body>
      </foreignObject>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.base-screenshot {
}
</style>
