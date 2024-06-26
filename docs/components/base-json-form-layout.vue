<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormLayoutProps {
  prop1?: string;
}
export const BaseJsonFormLayoutDefault = {};
export interface BaseJsonFormLayoutEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormLayoutProps>(), BaseJsonFormLayoutDefault);
defineEmits<BaseJsonFormLayoutEmits>();
defineOptions({
  name: 'BaseJsonFormLayout',
});
const layout = ref('inline');
</script>

<template>
  <label>
    <input type="radio" name="layout" value="vertical" v-model="layout" />纵向布局
  </label>
  <label>
    <input type="radio" name="layout" value="inline" v-model="layout" />行内布局
  </label>
  <base-json-form
    class="base-json-form-alignment"
    label-width="calc(2em + 24px)"
    :layout="layout"
    :inputs="{
      name: '姓名',
      password: {
        label: '密码',
        type: 'Password',
      },
    }"
    w-160
    :show-query="false"
  >
  </base-json-form>
</template>

<style scoped lang="scss">
.base-json-form-layout {
}
</style>
