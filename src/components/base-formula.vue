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
const onAddTag = (tag: string) => {
  const hr = document.createElement('hr');
  hr.dataset.content = tag;
  hr.dataset.editable = 'false';
  baseContenteditableRef.value.insertNode(hr);
};
</script>

<template>
  <div class="base-formula" flex flex-col gap-2>
    <div class="base-formula__tag-list" flex gap-2 select-none>
      <base-status
        v-for="tag in tagList"
        :key="tag"
        :value="tag"
        variant="fill"
        cursor-pointer
        @click="onAddTag(tag)"
      >
      </base-status>
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
    :deep(hr) {
      display: inline-block;
      vertical-align: middle;
      border: none;
      margin: 0;
      padding: 2px 8px;
      background: #f2f6ff;
      border-radius: 3px;
      color: #0072ff;
      font-size: 12px;
      line-height: 20px;
      &::before {
        content: attr(data-content);
      }
    }
    :deep(hr + hr) {
      margin-left: 4px;
    }
  }
}
</style>
