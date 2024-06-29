<script lang="ts">
import { type Component, ref } from 'vue';
import { Input } from 'tdesign-vue-next';
import { SearchIcon } from 'tdesign-icons-vue-next';

export interface BaseSearchProps {
  prop1?: string;
}
export const BaseSearchDefault = {};
export interface BaseSearchEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Input,
  SearchIcon,
};
export const registerBaseSearchComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseSearchProps>(), BaseSearchDefault);
defineEmits<BaseSearchEmits>();
defineOptions({
  name: 'BaseSearch',
});
</script>

<template>
  <component :is="componentMap.Input" v-bind="$attrs">
    <template #suffixIcon>
      <component
        :is="componentMap.SearchIcon"
        :style="{
          cursor: 'pointer',
        }"
      />
    </template>
  </component>
</template>

<style scoped lang="scss">
.base-search {
}
</style>
