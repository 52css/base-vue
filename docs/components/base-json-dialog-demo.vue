<script lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import { useAsyncRef, sleep } from '../../src/index';
export interface BaseJsonDialogDemoProps {
  prop1?: string;
}
export const BaseJsonDialogDemoDefault = {};
export interface BaseJsonDialogDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonDialogDemoProps>(), BaseJsonDialogDemoDefault);
defineEmits<BaseJsonDialogDemoEmits>();
defineOptions({
  name: 'BaseJsonDialogDemo',
});
const visible = ref(false);
const [patient, setPatient] = useAsyncRef(
  async () => {
    await sleep(500)
    return {
      patientName: '123',
      bedNumber: '002',
    };
  },
  {
    autoFetch: false,
  }
);
const [select1Options, setSelect1Options] = useAsyncRef(
  async () => {
    await sleep(200)
    return [
      {
        label: '001',
        value: 1,
      },
      {
        label: '002',
        value: 2,
      },
      {
        label: '003',
        value: 3,
      },
    ];
  },
  {
    autoFetch: false,
  }
);
const onClick = () => {
  setPatient();
  setSelect1Options();
  visible.value = true;
};
const request = async () => {
  await sleep(1000)
  // 模拟请求成功
  console.log('模拟请求成功')
  // throw new Error('模拟请求失败')
}
const onSubmit = () => {
  console.log('提交成功，并关闭弹窗')
}
</script>

<template>
  <button @click="onClick">打开弹窗</button>
  <base-json-dialog
    v-model:visible="visible"
    :inputs="{
      patientName: {
        label: '患者姓名',
        disabled: true,
      },
      bedNumber: {
        label: '床号',
        disabled: true,
      },
      toBedId: {
        label: '转入床位*',
        type: 'Select',
        options: select1Options,
      },
      date: {
        label: '换床时间*',
        type: 'DatePicker',
        enableTimePicker: true,
        format: 'YYYY-MM-DD HH:mm',
        value: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        disableDate: { after: dayjs().format() },
      },
    }"
    :request="request"
    label-align="top"
    :model="patient"
    header="换床"
    width="672"
    :span="4"
    @submit="onSubmit"
  />
</template>

<style scoped lang="scss">
.base-json-dialog-demo {
}
</style>
