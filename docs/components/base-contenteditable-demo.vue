<script lang="ts">
import { ref } from 'vue';
export interface BaseContenteditableDemoProps {
  prop1?: string;
}
export const BaseContenteditableDemoDefault = {};
export interface BaseContenteditableDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseContenteditableDemoProps>(),
  BaseContenteditableDemoDefault
);
defineEmits<BaseContenteditableDemoEmits>();
defineOptions({
  name: 'BaseContenteditableDemo',
});
const baseContenteditableRef = ref();
const value = ref(
  `阅文旗下<span>囊括<span><strong>QQ</strong>阅读</span>、起点中文网、新丽传媒等业界知名品牌</span>，拥有 1450 万部作品储备，940 万名<span>创作者</span>，覆盖 200 多种内容品类，触达数亿用户，已成功输出包括《庆余年》《赘婿》《鬼吹灯》《琅琊榜》《全职高手》在内的动画、影视、游戏等领域的 IP 改编代表作。`
);
const onSelection = () => {
  baseContenteditableRef.value.setSelection(7, 12);
};
const onRange = () => {
  baseContenteditableRef.value.setRange(8);
};
const onRevertSelection = () => {
  baseContenteditableRef.value.revertSelection();
};
const onInsertText = () => {
  baseContenteditableRef.value.insertText('我是新内容');
};
const onInsertMarkText = () => {
  baseContenteditableRef.value.insertMarkText('我是新内容');
};
const onSetMark = () => {
  baseContenteditableRef.value.setMark();
};
</script>

<template>
  <!-- <div class="base-contenteditable-demo">
    base-contenteditable-demo
  </div> -->

  <!-- value: {{ value }} -->

  <base-contenteditable ref="baseContenteditableRef" v-model="value" mb-4 />

  <button @click="onSelection">选中“7-12”之间的文本</button>
  <button @click="onRange">光标移动到“QQ”后面</button>
  <button @click="onRevertSelection">还原选区</button>
  <button @click="onInsertText">插入新内容</button>
  <button @click="onInsertMarkText">插入带标签的内容</button>
  <button @click="onSetMark">添加标记</button>
</template>

<style scoped lang="scss">
.base-contenteditable-demo {
}
button {
  border: 1px solid #000;
}
button + button {
  margin-right: 4px;
}
</style>
