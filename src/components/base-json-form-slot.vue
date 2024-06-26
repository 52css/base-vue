<script lang="ts">
import { isEqual } from 'lodash-es';
import BaseJsonFromField from './base-json-form-field.vue';
export interface BaseJsonFormSlotProps {
  componentMap?: any;
  formData?: any;
  formItem?: any;
  getFormItemList?: any;
  position: string;
}
export const BaseJsonFormSlotDefault = {};
export interface BaseJsonFormSlotEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseJsonFormSlotProps>(),
  BaseJsonFormSlotDefault
);
defineEmits<BaseJsonFormSlotEmits>();
defineOptions({
  name: 'BaseJsonFormSlot',
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
    <BaseJsonFromField
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
.base-json-form-slot {
}
</style>
