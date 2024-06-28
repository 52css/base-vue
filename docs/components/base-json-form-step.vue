<script lang="ts">
import { ref } from 'vue';
import { Steps as TSteps, StepItem as TStepItem } from 'tdesign-vue-next';

export interface BaseJsonFormStepProps {
  prop1?: string;
}
export const BaseJsonFormStepDefault = {};
export interface BaseJsonFormStepEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormStepProps>(), BaseJsonFormStepDefault);
defineEmits<BaseJsonFormStepEmits>();
defineOptions({
  name: 'BaseJsonFormStep',
});

const select1Options = [
  {
    label: '选项1',
    value: '选项1',
  },
  {
    label: '选项2',
    value: '选项2',
  },
];
const cascader1Options = [
  {
    label: '选项一',
    value: '1',
    children: [
      { label: '子选项一', value: '1.1' },
      { label: '子选项二', value: '1.2' },
    ],
  },
  {
    label: '选项二',
    value: '2',
    children: [
      { label: '子选项三', value: '2.1' },
      { label: '子选项四', value: '2.2' },
    ],
  },
];
const radio1Options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
];
const checkbox1Options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
];
const current = ref(0);
const titles = ['基本信息', '高级信息'];
const baseJsonFormRefs = ref<any[]>([]);
const setBaseJsonFormRef = (el: any, index: number) => {
  baseJsonFormRefs.value[index] = el;
};
const onSubmit = async () => {
  if (current.value === titles.length - 1) {
    // 基本上最后一步提交所有`model`
    const valid = await baseJsonFormRefs.value[current.value].validate();
    // 校验
    if (valid === true) {
      // 去提交表单
      const allModel = baseJsonFormRefs.value
        .map((x) => x?.model())
        .reduce((prev, item) => {
          prev = { ...prev, ...item };
          return prev;
        }, {});

      alert(JSON.stringify(allModel));
    }
  } else {
    // 基本上只要校验，保不定有些需要request，所以调用`onSubmit`函数
    await baseJsonFormRefs.value[current.value].onSubmit();

    current.value += 1;
  }
};
const onPrev = () => {
  current.value -= 1;
};
</script>

<template>
  <t-steps v-model="current" readonly class="w-1/2" mx-a mt-4 mb-8>
    <t-step-item
      v-for="(title, titleIndex) in titles"
      :title="title"
      :key="titleIndex"
    />
  </t-steps>
  <base-json-form
    :ref="(el) => setBaseJsonFormRef(el, 0)"
    v-show="current === 0"
    :inputs="{
      input1: '普通输入框*',
      select1: {
        label: '下拉框',
        type: 'Select',
        options: select1Options,
      },
      cascader1: {
        label: '级联选择',
        type: 'Cascader',
        options: cascader1Options,
      },
      textarea1: {
        label: '备注/详细地址',
        type: 'Textarea',
      },
      date1: {
        label: '单个日期选择',
        type: 'DatePicker',
      },
      dateRange1: {
        label: '时间段选择',
        type: 'DateRangePicker',
      },
      radio1: {
        label: '单选框',
        type: 'Radio',
        options: radio1Options,
      },
      checkbox1: {
        label: '多选框',
        type: 'Checkbox',
        options: checkbox1Options,
      },
    }"
    :show-query="false"
  />
  <base-json-form
    :ref="(el) => setBaseJsonFormRef(el, 1)"
    v-show="current === 1"
    :inputs="{
      input1: 'input1',
      input2: 'input2*',
    }"
    :show-query="false"
  />
  <section flex items-center justify-center gap-2 my-4>
    <base-button v-if="current !== 0" @click="onPrev" theme="default">
      上一步
    </base-button>
    <base-button @click="onSubmit">
      {{ current === titles.length - 1 ? '保存' : '下一步' }}
    </base-button>
  </section>
</template>

<style scoped lang="scss">
.base-json-form-step {
}
</style>
