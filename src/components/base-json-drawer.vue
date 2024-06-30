<script lang="ts">
import { type Component, ref } from 'vue';
import { Drawer } from 'tdesign-vue-next';
import BaseJsonForm from './base-json-form.vue';

export interface BaseJsonDrawerProps {
  cancelButtonText?: string;
  confirmButtonText?: string;
  width?: string;
}
export const BaseJsonDrawerDefault = {
  cancelButtonText: '取消',
  confirmButtonText: '确定',
};
export interface BaseJsonDrawerEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Drawer,
};
export const registerBaseJsonDrawerComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonDrawerProps>(), BaseJsonDrawerDefault);
defineEmits<BaseJsonDrawerEmits>();
defineOptions({
  name: 'BaseJsonDrawer',
});
const visible = defineModel('visible');
const loading = ref(false);
const baseJsonFormRef = ref();
const onConfirm = async () => {
  if (loading.value) {
    return;
  }
  loading.value = true;
  try {
    // 校验并提交
    await baseJsonFormRef.value.onSubmit();
    visible.value = false;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <component
    :is="componentMap.Drawer"
    v-model:visible="visible"
    v-bind="$attrs"
    :cancel-btn="{
      content: cancelButtonText,
      theme: 'default',
    }"
    :confirm-btn="{
      content: confirmButtonText,
      theme: 'primary',
      loading,
      disabled: loading,
    }"
    :destroy-on-close="true"
    :on-confirm="onConfirm"
    :size="width"
    class="base-json-drawer"
  >
    <base-json-form
      v-if="visible"
      ref="baseJsonFormRef"
      v-bind="$attrs"
      :show-query="false"
    />
  </component>
</template>

<style lang="scss">
.base-json-drawer {
  .t-drawer__footer > div {
    justify-content: end;
    flex-direction: row-reverse;
    gap: 8px;
  }
}
</style>
