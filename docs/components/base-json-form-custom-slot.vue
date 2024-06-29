<script lang="ts">
export interface BaseJsonFormCustomSlotProps {
  prop1?: string;
}
export const BaseJsonFormCustomSlotDefault = {};
export interface BaseJsonFormCustomSlotEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseJsonFormCustomSlotProps>(),
  BaseJsonFormCustomSlotDefault
);
defineEmits<BaseJsonFormCustomSlotEmits>();
defineOptions({
  name: 'BaseJsonFormCustomSlot',
});
const request = async () => {
  return [
    {
      id: 1,
      name: '张三',
      address: '地址1'
    },
    {
      id: 2,
      name: '李四',
      address: '地址2'
    },
  ];
};
</script>

<template>
  <h3>支持`表单标题`、`表单项`、`表格标题`、`表单项` 插槽</h3>
  <base-json-form
    :inputs="{
      i_input1: '',
      i_input2: '输入2',
      input3: 'i_label3',
    }"
    :request="request"
    :columns="{
      id: '编号',
      c_name: '表格项目插槽',
      address: 'c_address'
    }"
  >
    <template #i_input1="{ formModel }"> 表单项插槽1 </template>
    <template #i_input2> 表单项插槽2 </template>
    <template #i_label3> 表单标题插槽3 </template>
    <template #c_name="{ row }"> hi, {{ row.name }} </template>
    <template #c_address>
      <span text-orange-400>
        地址
      </span>
    </template>
  </base-json-form>
</template>

<style scoped lang="scss">
.base-json-form-custom-slot {
}
</style>
