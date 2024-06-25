<script lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useDPI } from '../hooks/use-dpi';

export type BasePrintLayout = 'landscape' /** 横向 */ | 'portrait'; /** 纵向 */
export interface BasePrintProps {
  layout?: BasePrintLayout;
  zoomable?: boolean;
  width?: number | string
  height?: number | string
}
export const BasePrintDefault = {
  layout: 'landscape' as BasePrintProps['layout'],
  zoomable: false,
  width: '100%',
  height: 300
};
export interface BasePrintEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BasePrintProps>(), BasePrintDefault);
defineEmits<BasePrintEmits>();
defineOptions({
  name: 'BasePrint',
});
const basePrintRef = ref();
const basePrintFrameRef = ref();
const isMounted = ref(false);
const isClick = ref(false);
const floorToTwoDecimalPlaces = (num: number) => {
  const val = Math.floor(num * 100) / 100;
  return val < 1 ? val : 1;
};
const { getDPI, convertA4ToPixels, mmToPx } = useDPI();
const dpi = getDPI();
const a4Size = convertA4ToPixels(dpi);
const print = () => {
  if (!isMounted.value) {
    throw new Error('dom未加载完毕');
  }

  if (isClick.value) {
    throw new Error('已经点击过打印');
  }
  isClick.value = true;

  // 获取元素的宽高
  var outWidth = basePrintRef.value.offsetWidth + 8;

  var zoom = floorToTwoDecimalPlaces(
    props.layout === 'landscape'
      ? (a4Size.height - mmToPx(6 * 2, dpi)) / outWidth
      : (a4Size.width - mmToPx(6 * 2, dpi)) / outWidth
  );

  console.log('zoom', zoom);

  // 获取当前页面中的 .test 元素的内容
  var printBody = basePrintRef.value.outerHTML;

  // console.log('printBody', printBody)

  // 获取 <iframe> 元素
  var printFrame = basePrintFrameRef.value;

  // 获取 <iframe> 的文档对象
  var printDocument =
    printFrame.contentDocument || printFrame.contentWindow.document;

  var printHtml = `
    <html>
      <head>
        <title>打印预览</title>
        <style>
          @media print {
            @page {
              /* 设置为横向(landscape)打印  纵向(portrait) */
              size: A4 ${props.layout};
              margin: 6mm;
            }
            /* 告诉浏览器在渲染它时不要对框进行颜色或样式调整 */
            * {
              -webkit-print-color-adjust: exact !important;
              -moz-print-color-adjust: exact !important;
              -ms-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        </style>
      </head>
      <body>
        <div style="zoom:${props.zoomable ? zoom : 1}">
          ${printBody}
        </div>
      </body>
    </html>
  `;

  // console.log('printHtml', printHtml)

  // 写入打印内容及样式到 <iframe> 中
  printDocument.write(printHtml);

  // 关闭写入流
  printDocument.close();

  // 使用 <iframe> 的文档对象触发打印
  printFrame.contentWindow.print();

  nextTick(() => {
    isClick.value = false;
  });
};
onMounted(() => {
  isMounted.value = true;
});

defineExpose({
  print,
});
</script>

<template>
  <!-- <div class="base-print">base-print</div> -->
  <div ref="basePrintRef" class="base-print" style="width: fit-content">
    <svg :height="height" :width="width" xmlns="http://www.w3.org/2000/svg">
      <foreignObject :height="height" :width="width" x="0" y="0">
        <body xmlns="http://www.w3.org/1999/xhtml">
          <slot />
        </body>
      </foreignObject>
    </svg>
  </div>
  <iframe ref="basePrintFrameRef" style="display: none" />
</template>

<style scoped lang="scss">
.base-print {
}
</style>
