<script lang="ts">
import { ref } from 'vue';
export interface BaseScreenshotDemoProps {
  prop1?: string;
}
export const BaseScreenshotDemoDefault = {};
export interface BaseScreenshotDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseScreenshotDemoProps>(), BaseScreenshotDemoDefault);
defineEmits<BaseScreenshotDemoEmits>();
defineOptions({
  name: 'BaseScreenshotDemo',
});
const baseScreenshotRef = ref();
const onScreenshot = () => {
  baseScreenshotRef.value.screenshot();
};

const baseScreenshot2Ref = ref();
const onScreenshot2 = () => {
  baseScreenshot2Ref.value.screenshot();
};
</script>

<template>
  <h3>文字截图</h3>
  <button @click="onScreenshot">开始截图</button>
  <base-screenshot ref="baseScreenshotRef" width="352" height="103">
    <div
      style="
        background: #f0f0f0;
        padding: 20px;
        font-size: 14px;
        line-height: 1.5;
      "
    >
      <!-- <img
        src="https://www.zhangxinxu.com/study/201708/0.jpg"
        width="120"
        style="margin: 0 auto; border-radius: 50%"
      /> -->
      <div style="text-align: center; font-weight: 600">长天</div>
      <div>
        对网文潮流具有极敏锐嗅觉，有丰富写作指导经验。带出血红、猫腻、。。。。
      </div>
    </div>
  </base-screenshot>
  <h3>照片截图</h3>
  <button @click="onScreenshot2">开始截图</button>
  <base-screenshot ref="baseScreenshot2Ref" width="352" height="223">
    <div
      style="
        background: #f0f0f0;
        padding: 20px;
        font-size: 14px;
        line-height: 1.5;
      "
    >
      <img
        src="./0.jpg"
        width="120"
        style="margin: 0 auto; border-radius: 50%; display: block"
      />
      <div style="text-align: center; font-weight: 600">长天</div>
      <div>
        对网文潮流具有极敏锐嗅觉，有丰富写作指导经验。带出血红、猫腻、。。。。
      </div>
    </div>
  </base-screenshot>
</template>

<style scoped lang="scss">
.base-screenshot-demo {
}
</style>
