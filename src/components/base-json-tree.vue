<script lang="ts">
import { type Component, ref } from 'vue';
import { Tree } from 'tdesign-vue-next';

export interface BaseJsonTreeProps {
  expandAll?: boolean;
  activable?: boolean;
  hover?: boolean;
  transition?: boolean;
}
export const BaseJsonTreeDefault = {
  expandAll: true,
  activable: true,
  hover: true,
  transition: true,
};
export interface BaseJsonTreeEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Tree,
};
export const registerBaseJsonTreeComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonTreeProps>(), BaseJsonTreeDefault);
defineEmits<BaseJsonTreeEmits>();
defineOptions({
  name: 'BaseJsonTree',
});
const baseJsonFormRef = ref();
const actived = defineModel('actived');

defineExpose({
  init: () => {
    baseJsonFormRef.value?.init();
  },
});
</script>

<template>
  <!-- actived: {{ actived }} -->
  <base-json-form
    ref="baseJsonFormRef"
    v-bind="$attrs"
    list-type="list"
    :show-query="false"
  >
    <template #list="{ data }">
      <component
        :is="componentMap.Tree"
        v-bind="$attrs"
        v-model:actived="actived"
        expandAll
        activable
        hover
        transition
        :data="data"
      />
    </template>
  </base-json-form>
</template>

<style scoped lang="scss">
.base-json-tree {
}
</style>
