<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormAlignmentProps {
  prop1?: string;
}
export const BaseJsonFormAlignmentDefault = {};
export interface BaseJsonFormAlignmentEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormAlignmentProps>(),
  BaseJsonFormAlignmentDefault
);
defineEmits<BaseJsonFormAlignmentEmits>();
defineOptions({
  name: 'BaseJsonFormAlignment',
});
const labelAlign = ref('right');
</script>

<template>
  <label>
    <input type="radio" name="labelAlign" value="left" v-model="labelAlign" />左对齐
  </label>
  <label>
    <input type="radio" name="labelAlign" value="right" v-model="labelAlign" />右对齐
  </label>
  <label>
    <input type="radio" name="labelAlign" value="top" v-model="labelAlign" />顶部对齐
  </label>

  <base-json-form
    class="base-json-form-alignment"
    :label-width="60"
    :label-align="labelAlign"
    :inputs="{
      name: '姓名',
      password: {
        label: '密码',
        type: 'Password'
      },
    }"
    w-160
  >
    <template #query>
      <base-button>登录</base-button>
    </template>
  </base-json-form>
</template>

<style scoped lang="scss">
.base-json-form-alignment {
}
</style>
