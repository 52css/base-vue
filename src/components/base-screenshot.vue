<script lang="ts">
import { ref } from 'vue';
export interface BaseScreenshotProps {
  width?: number | string;
  height?: number | string;
  filename?: string
}
export const BaseScreenshotDefault = {
  filename: 'screenshot.jpg'
};
export interface BaseScreenshotEmits {
  (event: 'event1'): void;
}
export const getBase64ByUrl = (url): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // 允许跨域请求

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, img.width, img.height);
      }
      const quality = 0.8;

      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = async () => {
      const response = await fetch(url);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    };

    img.src = url;
  });
};
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
const screenshot = async () => {
  const svg = baseScreenshotRef.value.innerHTML;
  const url =
    'data:image/svg+xml;charset=utf-8,' +
    svg.replace(/\n/g, '').replace(/\t/g, '').replace(/#/g, '%23');
  const base64 = await getBase64ByUrl(url);
  const link = document.createElement('a');
  link.href = base64;
  link.download = props.filename;
  link.click();
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
