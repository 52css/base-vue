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
  <ul>
    <li>支持内链样式</li>
  </ul>
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
      <div style="text-align: center; font-weight: 600">长天</div>
      <div>
        对网文潮流具有极敏锐嗅觉，有丰富写作指导经验。带出血红、猫腻、。。。。
      </div>
    </div>
  </base-screenshot>
  <h3>照片截图</h3>
  <ul>
    <li>支持class样式，必须全局唯一</li>
    <li>支持filename自定义</li>
  </ul>
  <button @click="onScreenshot2">开始截图</button>
  <base-screenshot ref="baseScreenshot2Ref" width="352" height="223" filename="长天.jpg">
    <!-- 这里需要写成 component is="style", 不然lint报错 -->
    <component is="style">
      .s2-container { background: #f0f0f0; padding: 20px; font-size: 14px;
      line-height: 1.5; } .s2-container__img { margin: 0 auto; border-radius:
      50%; display: block } .s2-container__title { text-align: center;
      font-weight: 600 } .s2-container__desc {}
    </component>
    <div class="s2-container">
      <img src="./0.jpg" width="120" class="s2-container__img" />
      <div class="s2-container__title">长天</div>
      <div class="s2-container__desc">
        对网文潮流具有极敏锐嗅觉，有丰富写作指导经验。带出血红、猫腻、。。。。
      </div>
    </div>
  </base-screenshot>
</template>

<style scoped lang="scss">
.base-screenshot-demo {
}
</style>
