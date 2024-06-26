<script lang="ts">
import { isEqual } from 'lodash-es';
import BaseJsonFormField from './base-json-form-field.vue';

export interface BaseJsonFormGroupProps {
  componentMap?: any;
  formData?: any;
  formItem?: any;
  getFormItemList?: any;
  position: string;
}
export const BaseJsonFormGroupDefault = {};
export interface BaseJsonFormGroupEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseJsonFormGroupProps>(),
  BaseJsonFormGroupDefault
);
defineEmits<BaseJsonFormGroupEmits>();
defineOptions({
  name: 'BaseJsonFormGroup',
});

const getGroupFromItem = (groupName: string, positionName?: string) => {
  const item = props.getFormItemList.find((x: any) =>
    isEqual(x?.group, [groupName, positionName])
  );

  return item;
  // return props..value.find(
  //   (x) => x?.group === [groupName, positionName]
  // );
};
</script>

<template>
  <template v-if="formItem.group">
    <!-- 11, {{  getGroupFromItem(formItem.group?.[0], position) }} -->
    <base-json-form-field
      :componentMap="componentMap"
      :formData="formData"
      :formItem="getGroupFromItem(formItem.group?.[0], position)"
    />
  </template>
  <template v-else>
    {{ formItem?.[position] }}
  </template>
</template>

<style scoped lang="scss">
.base-json-form-group {
}
</style>
