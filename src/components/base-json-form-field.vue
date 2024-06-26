<script lang="ts">
export interface BaseJsonFormFieldProps {
  componentMap?: any;
  formData?: any;
  formItem?: any;
}
export const BaseJsonFormFieldDefault = {};
export interface BaseJsonFormFieldEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormFieldProps>(), BaseJsonFormFieldDefault);
defineEmits<BaseJsonFormFieldEmits>();
defineOptions({
  name: 'BaseJsonFormField',
});
</script>

<template>
  <!-- {{ formItem?.type }} -->
  <component
    :is="componentMap[formItem?.type]"
    v-model="formData[formItem?.prop]"
    v-bind="formItem"
    :label="formItem?.prefix"
  >
    {{ formItem?.children }}
  </component>
</template>

<style scoped lang="scss">
.base-json-form-field {
}
</style>
