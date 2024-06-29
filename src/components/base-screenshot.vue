<script lang="ts">
import { ref } from 'vue';
export interface BaseScreenshotProps {
  width?: number | string;
  height?: number | string;
  filename?: string;
  quality?: number;
}
export const BaseScreenshotDefault = {
  filename: 'screenshot.jpg',
  quality: 1,
};
export interface BaseScreenshotEmits {
  (event: 'event1'): void;
}
export const getBase64ByUrl = (url, quality): Promise<string> => {
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
export const asyncReplace = async (str, regex, asyncReplacer) => {
  const matches = [...str.matchAll(regex)];
  const replacements = await Promise.all(
    matches.map(async (match) => {
      const replacement = await asyncReplacer(...match);
      return { match, replacement };
    })
  );

  let result = str;
  for (const { match, replacement } of replacements) {
    result = result.replace(match[0], replacement);
  }

  return result;
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
    svg
      .replace(/\n/g, '')
      .replace(/\t/g, '')
      .replace(/#/g, '%23')
      // 修复图片子结束标签不对
      .replace(/<img([^>]+?)>/g, ($0, $1) => {
        return `<img` + $1 + '/>';
      })
      // 删除注释节点
      .replace(/<!--[\s\S]*?-->/g, '');

  // 所有资源需要转换成base64
  const newUrl = await asyncReplace(url, /src="([^"]+)"/g, async ($0, $1) => {
    return `src="${await getBase64ByUrl($1, props.quality)}"`;
  });

  const base64 = await getBase64ByUrl(newUrl, props.quality);
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
    <svg
      :height="height"
      :width="width"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject height="100%" width="100%" x="0" y="0">
        <body
          xmlns="http://www.w3.org/1999/xhtml"
          style="margin: 0; padding: 0"
        >
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
