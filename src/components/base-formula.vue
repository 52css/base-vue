<script lang="ts">
import { ref, onMounted } from 'vue';
import BaseStatus from './base-status.vue';
import BaseContenteditable from './base-contenteditable.vue';

export interface BaseFormulaProps {
  tagList?: string[];
}
export const BaseFormulaDefault = {
  tagList: () => [],
};
export interface BaseFormulaEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseFormulaProps>(), BaseFormulaDefault);
defineEmits<BaseFormulaEmits>();
defineOptions({
  name: 'BaseFormula',
});
const value = defineModel({ type: String, default: '' });
const baseContenteditableRef = ref();
const onAddTag = (e: Event) => {
  // const hr = document.createElement('hr');
  // hr.dataset.content = tag;
  // hr.dataset.editable = 'false';
  const img = document.createElement('img');
  img.dataset.editable = 'false';
  img.style.display = 'inline-block';
  img.style.verticalAlign = 'middle';
  const svg = (e.currentTarget as any).outerHTML;
  const url =
    'data:image/svg+xml;charset=utf-8,' +
    svg
      .replace(/\n/g, '')
      .replace(/\t/g, '')
      .replace(/#/g, '%23')
      // 修复图片子结束标签不对
      .replace(/<img([^>]+?)>/g, (_$0: string, $1: string) => {
        return `<img` + $1 + '/>';
      })
      // 删除注释节点
      .replace(/<!--[\s\S]*?-->/g, '');
  console.log('url', url)
  img.src = url;
  baseContenteditableRef.value.insertNode(img);
};
</script>

<template>
  <div class="base-formula" flex flex-col gap-2>
    <div class="base-formula__tag-list" flex gap-2 select-none>
      <base-svg-html
        v-for="tag in tagList"
        :key="tag"
        cursor-pointer
        @click="onAddTag($event)"
        :width="tag.length * 12 + 16"
        height="24"
      >
        <div
          style="
            display: inline-block;
            padding: 2px 8px;
            background-color: #f2f6ff;
            border-radius: 3px;
            font-size: 12px;
            color: #0072ff;
            line-height: 20px;
          "
        >
          {{ tag }}
        </div>
      </base-svg-html>
    </div>
    <base-contenteditable
      ref="baseContenteditableRef"
      class="base-formula__editor"
      v-model="value"
    />
  </div>
</template>

<style scoped lang="scss">
.base-formula {
  &__editor {
    height: 142px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 5px;
    :deep(img + img) {
      margin-left: 4px;
    }
  }
}
</style>
