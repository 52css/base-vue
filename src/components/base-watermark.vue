<script lang="ts">
import { ref, onMounted } from 'vue';
export interface BaseWatermarkProps {
  text?: string;
  fontSize?: number;
  gap?: number;
}
export const BaseWatermarkDefault = {
  text: 'watermark',
  fontSize: 16,
  gap: 100,
};
export interface BaseWatermarkEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseWatermarkProps>(),
  BaseWatermarkDefault
);
defineEmits<BaseWatermarkEmits>();
defineOptions({
  name: 'BaseWatermark',
});
const baseWatermarkRef = ref();
const canvas = document.createElement('canvas');
const devicePixelRatio = window.devicePixelRatio || 1;
const fontSize = props.fontSize! * devicePixelRatio;
const font = fontSize + 'px serif';
const ctx = canvas.getContext('2d')!;

// 获取文字宽度
ctx.font = font;
const { width } = ctx.measureText(props.text);
const canvasSize =
  Math.max(100, width) + (props.gap as number) * devicePixelRatio;
canvas.width = canvasSize;
canvas.height = canvasSize;
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.rotate((Math.PI / 180) * -45);
ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
ctx.font = font;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(props.text, 0, 0);
const base64 = canvas.toDataURL();
const size = canvasSize / devicePixelRatio;
let div: HTMLDivElement;
const watermark = () => {
  if (!baseWatermarkRef.value) return
  if (div) {
    div.remove()
  }
  div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundSize = `${size}px ${size}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.zIndex = '9999'
  div.style.inset = '0'
  baseWatermarkRef.value.$el.appendChild(div)
}
const onObserver = (entry) => {
  // 删除
  for (const dom of entry.removedNodes) {
    if (dom === div) {
      watermark();
      return;
    }
  }
  // 修改
  if (entry.target === div) {
    watermark();
    return;
  }
};

onMounted(watermark)
</script>

<template>
  <base-mutation-observer
    ref="baseWatermarkRef"
    class="base-watermark"
    @observer="onObserver"
    relative
  >
    <slot />
  </base-mutation-observer>
</template>

<style scoped lang="scss">
.base-watermark {
}
</style>
