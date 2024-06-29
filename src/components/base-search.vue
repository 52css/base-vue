<script lang="ts">
import { type Component, ref } from 'vue';
import { Input } from 'tdesign-vue-next';
import { SearchIcon } from 'tdesign-icons-vue-next';

export type BaseSearchTrigger = 'enter' | 'blur';

export interface BaseSearchProps {
  trigger?: string;
  clearable?: boolean;
}
export const BaseSearchDefault = {
  trigger: 'enter' as BaseSearchTrigger,
  clearable: true
};
export interface BaseSearchEmits {
  (event: 'submit'): void;
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
const props = withDefaults(defineProps<BaseSearchProps>(), BaseSearchDefault);
const emit = defineEmits<BaseSearchEmits>();
defineOptions({
  name: 'BaseSearch',
});
const onEnter = () => {
  if (props.trigger !== 'enter') {
    return;
  }
  onSubmit();
};
const onSubmit = () => {
  emit('submit');
};
const onBlur = () => {
  if (props.trigger !== 'blur') {
    return;
  }
  onSubmit();
};
</script>

<template>
  <component
    :is="componentMap.Input"
    @enter="onEnter"
    @blur="onBlur"
    :clearable="clearable"
    v-bind="$attrs"
  >
    <template #suffixIcon>
      <component
        :is="componentMap.SearchIcon"
        :style="{
          cursor: 'pointer',
        }"
        @click="onSubmit"
      />
    </template>
  </component>
</template>

<style scoped lang="scss">
.base-search {
}
</style>
