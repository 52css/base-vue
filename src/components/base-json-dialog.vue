<script lang="ts">
import { type Component, ref } from 'vue';
import { Dialog } from 'tdesign-vue-next';
import BaseJsonForm from './base-json-form.vue';

export interface BaseJsonDialogProps {
  cancelButtonText?: string;
  confirmButtonText?: string;
}
export const BaseJsonDialogDefault = {
  cancelButtonText: '取消',
  confirmButtonText: '确定',
};
export interface BaseJsonDialogEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Dialog,
};
export const registerBaseJsonDialogComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonDialogProps>(), BaseJsonDialogDefault);
defineEmits<BaseJsonDialogEmits>();
defineOptions({
  name: 'BaseJsonDialog',
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
    :is="componentMap.Dialog"
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
    class="base-json-dialog"
  >
    <base-json-form
      v-if="visible"
      ref="baseJsonFormRef"
      v-bind="$attrs"
      :show-query="false"
    />
  </component>
</template>

<style scoped lang="scss">
.base-json-dialog {
}
</style>
