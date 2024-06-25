<script lang="ts">
import { ref } from 'vue';
export interface BasePrintDemoProps {
  prop1?: string;
}
export const BasePrintDemoDefault = {};
export interface BasePrintDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BasePrintDemoProps>(), BasePrintDemoDefault);
defineEmits<BasePrintDemoEmits>();
defineOptions({
  name: 'BasePrintDemo',
});
const basePrintRef = ref();
const onPrint = () => {
  basePrintRef.value.print();
};
</script>

<template>
  <button @click="onPrint">开始打印</button>
  <base-print
    ref="basePrintRef"
    class="base-print-demo"
    width="960"
    height="164"
    zoomable
    layout="portrait"
  >
    <!-- 这个需要这样是使用style -->
    <component is="style">
      .bopcd-table { display: table!important; width: 100%; border-collapse:
      collapse; table-layout: fixed; border: 1px solid black; border-spacing: 0;
      margin: 0 !important; } .bopcd-table th, .bopcd-table td {
      border-collapse: collapse; border: 1px solid black; padding: 14px 16px;
      color: #1a1a1a; height: 22px; text-align: left; white-space: nowrap;
      font-weight: 400; font-size: 14px; }
    </component>
    <table class="bopcd-table">
      <thead>
        <tr>
          <th>姓名</th>
          <th>李浩盛</th>
          <th>性别</th>
          <th>男</th>
          <th>年龄</th>
          <th>40</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>入院日期</td>
          <td>2024-10-10 08:00</td>
          <td>科室</td>
          <td>重症医学科</td>
          <td>床号</td>
          <td>18床</td>
        </tr>
        <tr>
          <td>诊断</td>
          <td colspan="3">先天性心脏病</td>
          <td>住院号</td>
          <td>19001994</td>
        </tr>
      </tbody>
    </table>
  </base-print>
</template>

<style scoped lang="scss">
.base-print-demo {
}
</style>
