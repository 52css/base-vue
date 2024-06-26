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
  <template v-if="formItem?.group">
    <component
      :is="componentMap.FormItem"
      :name="formItem.prop"
      :prop="formItem.prop"
      :rules="[
        {
          required: formItem.required,
        },
      ]"
      :label-width="0"
      style="margin-right: 0"
    >
      <component
        :is="componentMap[formItem?.type]"
        v-model="formData[formItem?.prop]"
        v-bind="formItem"
        :label="formItem?.prefix"
      >
        <!-- <template v-if="formItem?.children">
          {{ formItem?.children }}
        </template> -->
      </component>
    </component>
  </template>
  <component
    v-else
    :is="componentMap[formItem?.type]"
    v-model="formData[formItem?.prop]"
    v-bind="formItem"
    :label="formItem?.prefix"
  >
    <!-- <template v-if="formItem?.children">
      {{ formItem?.children }}
    </template> -->
  </component>
</template>

<style scoped lang="scss">
.base-json-form-field {
}
</style>
