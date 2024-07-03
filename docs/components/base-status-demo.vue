<script lang="ts">
import { ref } from 'vue';
export interface BaseStatusDemoProps {
  prop1?: string;
}
export const BaseStatusDemoDefault = {};
export interface BaseStatusDemoEmits {
  (event: 'event1'): void;
}
export const OrderStatus = {
  未下单: { value: 0, theme: 'default' },
  已下单: { value: 1, theme: 'primary' },
  已配送: { value: 2, theme: 'primary' },
  已签收: { value: 3, theme: 'success' },
  退货中: { value: 4, theme: 'danger' },
};
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseStatusDemoProps>(), BaseStatusDemoDefault);
defineEmits<BaseStatusDemoEmits>();
defineOptions({
  name: 'BaseStatusDemo',
});
const status = ref(2);
const onStatusClick  = () => {
  if (status.value === 3) {
    status.value = 0
  } else {
    status.value ++;
  }
}

const orderStatus = ref(0);
const onOrderStatusClick = () => {
  if (orderStatus.value === 4) {
    orderStatus.value = 0
  } else {
    orderStatus.value ++;
  }
}
</script>

<template>
  <h3>值时状态str</h3>
  <base-status value="进行中" />

  <h3>值时val + options</h3>
  <base-status
    :value="status"
    :options="[
      { label: '未开始', value: 0, theme: 'default' },
      { label: '进行中', value: 1, theme: 'primary' },
      { label: '已完成', value: 2, theme: 'success' },
      { label: '失败', value: 3, theme: 'danger' },
    ]"
    @click="onStatusClick"
  />

  <h3>值时val + enum</h3>
  <base-status
    :value="orderStatus"
    :options="OrderStatus"
    @click="onOrderStatusClick"
  />
</template>

<style scoped lang="scss">
.base-status-demo {
}
</style>
