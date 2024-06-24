<script lang="ts">
import { type Component, ref } from 'vue';
import { Button, Popconfirm } from 'tdesign-vue-next';
import { isPromise } from '../utils/is-promise';

export interface BaseButtonProps {
  confirm?: string;
  onClick?: (e: Event) => Promise<void>;
}
export const BaseButtonDefault = {};
export interface BaseButtonEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Button,
  Popconfirm,
};
export const registerBaseJsonFormComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BaseButtonProps>(), BaseButtonDefault);
defineEmits<BaseButtonEmits>();
defineOptions({
  name: 'BaseButton',
});
const loading = ref(false);
const onClick = (e: Event) => {
  const fn = props.onClick;
  if (!fn || loading.value) {
    return;
  }

  loading.value = true;

  const execFn = fn.call(null, e);

  if (isPromise(execFn)) {
    execFn.finally(() => {
      loading.value = false;
    });
  } else {
    // 延迟300ms，关闭loading
    setTimeout(() => {
      loading.value = false;
    }, 300);
  }
};
</script>

<template>
  <component
    v-if="confirm"
    :is="componentMap.Popconfirm"
    :content="confirm"
    v-bind="$attrs"
    :on-confirm="onClick"
  >
    <component
      v-if="confirm"
      :is="componentMap.Button"
      v-bind="$attrs"
      :loading="loading"
    >
      <template v-for="(_value, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData" />
      </template>
    </component>
  </component>
  <component
    v-else
    :is="componentMap.Button"
    v-bind="$attrs"
    @click="onClick"
    :loading="loading"
  >
    <template v-for="(_value, name) in $slots" #[name]="scopeData">
      <slot :name="name" v-bind="scopeData" />
    </template>
  </component>
</template>

<style scoped lang="scss">
.base-button {
}
</style>
