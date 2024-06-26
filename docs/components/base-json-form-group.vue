<script lang="ts">
import { ref } from 'vue';
export interface BaseJsonFormGroupProps {
  prop1?: string;
}
export const BaseJsonFormGroupDefault = {};
export interface BaseJsonFormGroupEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormGroupProps>(), BaseJsonFormGroupDefault);
defineEmits<BaseJsonFormGroupEmits>();
defineOptions({
  name: 'BaseJsonFormGroup',
});
const timeUnknownOptions = [
  {
    label: '不详',
    value: true,
  },
];
const model = ref({});
</script>

<template>
  <base-json-form
    label-align="top"
    :inputs="{
      time: {
        label: '置管时间*',
        type: 'DatePicker',
        group: ['time'],
        disabled: (m: any) => m.timeUnknown,
      },
      timeUnknown: {
        type: 'Checkbox',
        group: ['time', 'right'],
        onChange: (m: any) => {
          if (m.timeUnknown) {
            m.time = undefined;
          }
        },
      },
    }"
    :model="model"
    :span="3"
    :show-query="false"
  />
</template>

<style scoped lang="scss">
.base-json-form-group {
}
</style>
