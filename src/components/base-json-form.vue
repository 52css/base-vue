<script lang="ts">
import { type Component, ref, computed, watch } from 'vue';
import {
  Table,
  AutoComplete,
  Cascader,
  CheckboxGroup as Checkbox,
  ColorPicker,
  DatePicker,
  DateRangePicker,
  Form,
  FormItem,
  Input,
  InputAdornment,
  InputNumber,
  TagInput,
  RadioGroup as Radio,
  RangeInput,
  Select,
  SelectInput,
  Slider,
  Switch,
  Textarea,
  Transfer,
  TimePicker,
  TimeRangePicker,
  TreeSelect,
  Upload,
} from 'tdesign-vue-next';
import { cloneDeep, set } from 'lodash-es';
import BaseJsonFormItem from './base-json-form-item.vue';
import BaseLabel from './base-label.vue';
import BaseButton from './base-button.vue';

export const Password = cloneDeep(Input);
Password.props.type.default = 'password';

export type BaseJsonFormColumnFixed = 'left' | 'right';
export type BaseJsonFormColumn = {
  align?: BaseJsonFormLabelAlign;
  append?: string;
  before?: string;
  bottom?: string;
  ellipsis?: boolean;
  fixed?: BaseJsonFormColumnFixed | boolean;
  if?: (lastQueryModel: BaseJsonFormModel) => boolean;
  label?: string;
  left?: string;
  minWidth?: string | number;
  prepend?: string;
  required?: boolean;
  right?: string;
  subLabel?: string;
  tips?: string;
  top?: string;
  type?: keyof typeof componentMap;
  width?: string | number;
};

export type BaseJsonFormOption = {
  label: string;
  value: BaseJsonFormModelValue;
  [key: string]: any;
};

export type BaseJsonFormOutput = {
  (option: BaseJsonFormOption): BaseJsonFormModelValue;
};

export type BaseJsonFormInput = {
  append?: string;
  bottom?: string;
  group?:
    | [string]
    | [string, 'top' | 'left' | 'bottom' | 'right' | 'prepend' | 'append'];
  if?: (model: BaseJsonFormModel) => boolean;
  label?: string;
  left?: string;
  options?: BaseJsonFormOption[];
  outputs?: Record<string, string | BaseJsonFormOutput>;
  prefix?: string;
  prepend?: string;
  required?: boolean;
  right?: string;
  span?: number;
  subLabel?: string;
  suffix?: string;
  tips?: string;
  top?: string;
  type?: keyof typeof componentMap;
  value?: BaseJsonFormModelValue;
  width?: string;
  multiple?: boolean;
  range?: boolean;
};

export type BaseJsonFormLabelAlign = 'left' | 'right' | 'top';

export type BaseJsonFormLayout = 'inline' | 'vertical';

export type BaseJsonFormListType = 'table' | 'card';

export type BaseJsonFormModel = Record<string, BaseJsonFormModelValue>;
export type BaseJsonFormModelValue =
  | string
  | number
  | boolean
  | string[]
  | number[];

export type BaseJsonFormPaginationType = 'pagination' | 'scroll';

export type BaseJsonFormRow = Record<string, any>;

export type BaseJsonFormRequest = {
  (model: BaseJsonFormModel): Promise<
    any | { rows: BaseJsonFormRow[]; total?: number } | BaseJsonFormRow[]
  >;
};

export interface BaseJsonFormProps {
  colon?: boolean;
  autoFetch?: boolean;
  columns?: Record<string, BaseJsonFormColumn>;
  inputs?: Record<string, BaseJsonFormInput>;
  labelAlign?: BaseJsonFormLabelAlign;
  layout?: BaseJsonFormLayout;
  listType?: BaseJsonFormListType;
  model?: BaseJsonFormModel;
  modelValue?: BaseJsonFormModelValue;
  paginationType?: BaseJsonFormPaginationType;
  request?: BaseJsonFormRequest;
  showQuery?: boolean;
  span?: number;
  title?: string;
  titleBold?: boolean;
}
export const BaseJsonFormDefault = {
  colon: false,
  columns: () => ({}),
  inputs: () => ({}),
  // labelAlign: 'top' as BaseJsonFormLabelAlign,
  listType: 'table' as BaseJsonFormListType,
  model: () => ({}),
  paginationType: 'pagination' as BaseJsonFormPaginationType,
  showQuery: true,
};
export interface BaseJsonFormEmits {
  (event: 'event1'): void;
}

export const componentMap: Record<string, Component> = {
  Table,
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  DateRangePicker,
  Form,
  FormItem,
  Input,
  InputAdornment,
  InputNumber,
  TagInput,
  Radio,
  RangeInput,
  Password,
  Select,
  SelectInput,
  Slider,
  Switch,
  Textarea,
  Transfer,
  TimePicker,
  TimeRangePicker,
  TreeSelect,
  Upload,
};

export const registerBaseJsonFormComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseJsonFormProps>(),
  BaseJsonFormDefault
);
defineEmits<BaseJsonFormEmits>();
defineOptions({
  name: 'BaseJsonForm',
});
const formRef = ref();
const formData = ref<Record<string, any>>({});
// const model = defineModel('model')
// console.log('model', props.model);
const getLabel = (label: string) => label.replaceAll('*', '');
const getRequired = (required?: boolean, label?: string) =>
  required ?? /\*/.test(String(label));
const getFormItemList = computed(() => {
  const rtv = [];

  for (let [prop, value] of Object.entries(props.inputs)) {
    if (typeof value === 'string') {
      const label = getLabel(value);
      rtv.push({
        prop,
        label,
        required: getRequired(undefined, value),
        type: 'Input',
      });
    } else {
      rtv.push({
        ...value,
        prop,
        type: value?.type ?? 'Input',
      });
    }
  }

  return rtv;
});
// const onSubmit: FormProps['onSubmit'] = ({ validateResult, firstError }) => {
//   if (validateResult === true) {
//     MessagePlugin.success('提交成功');
//   } else {
//     console.log('Validate Errors: ', firstError, validateResult);
//     MessagePlugin.warning(firstError);
//   }
// };
// console.log('getFormItemList.value', getFormItemList.value);
const onSubmit = async () => {
  const valid = await formRef.value.validate();
  const formModel = model();

  // console.log('valid', valid)
  if (valid === true) {
    await props.request?.(formModel);
  }
};
const getHasList = computed(() => {
  return (
    props.listType === 'card' ||
    (props.listType === 'table' && Object.keys(props.columns).length > 0)
  );
});
const onReset = async () => {
  formRef.value.reset();

  if (getHasList.value) {
    onSubmit();
  }
};
const getDefaultValueByType = (input?: BaseJsonFormInput) => {
  const { type, multiple, range } = input ?? {};

  if (
    ['Checkbox', 'DateRangePicker', 'TagInput', 'RangeInput'].includes(
      String(type)
    ) ||
    (type === 'Cascader' && multiple) ||
    (type === 'Select' && multiple) ||
    (type === 'SelectInput' && multiple) ||
    (type === 'Slider' && range) ||
    (type === 'TreeSelect' && multiple) ||
    (type === 'Upload' && multiple)
  ) {
    return [];
  }
};
const setDefaultValue = () => {
  for (let [prop, val] of Object.entries(props.inputs)) {
    if (typeof val === 'object') {
      const defaultValue = getDefaultValueByType(val);
      formData.value[prop] = formData.value[prop] ?? val?.value ?? defaultValue;
    }
  }
};
const model = () => {
  return Object.keys(formData.value).reduce((prev, item) => {
    // 前端过滤不是if展示的数据
    const param = props.inputs[item] as BaseJsonFormInput;
    const canSet = param && param.if ? param.if(formData.value) : true;

    if (canSet) {
      set(prev, item, formData.value[item]);
    }

    return prev;
  }, {});
};

watch(
  () => props.model,
  (newVal) => {
    formData.value = newVal;
    setDefaultValue();
  },
  {
    immediate: true,
  }
);

defineExpose({
  onSubmit,
  model,
});
</script>

<template>
  <div class="base-json-form">
    <section flex>
      <div class="base-json-form__title">
        <slot v-if="$slots.title" />
        <template v-else>
          {{ title }}
        </template>
      </div>
      <div class="base-json-form__inputs">
        <slot v-if="$slots.inputs" />
        <template v-else>
          <component
            :is="componentMap.Form"
            ref="formRef"
            :data="formData"
            :model="formData"
            :colon="colon"
            :labelAlign="labelAlign"
            :layout="layout"
            v-bind="$attrs"
            resetType="initial"
          >
            <component
              v-for="formItem in getFormItemList"
              v-bind="formItem"
              :is="componentMap.FormItem"
              :name="formItem.prop"
              :prop="formItem.prop"
              :key="formItem.prop"
              :rules="[
                {
                  required: formItem.required,
                },
              ]"
            >
              <template #label>
                <base-label :tips="formItem.tips">
                  {{ formItem.label }}
                </base-label>
              </template>
              <base-json-form-item>
                <component
                  :is="componentMap[formItem.type]"
                  v-model="formData[formItem.prop]"
                  v-bind="formItem"
                  :label="formItem.prefix"
                />
              </base-json-form-item>
            </component>
            <component :is="componentMap.FormItem" v-if="showQuery">
              <slot v-if="$slots.query" name="query" />
              <section v-else flex gap-2>
                <base-button theme="primary" @click="onSubmit">
                  提交
                </base-button>
                <base-button theme="default" variant="base" @click="onReset">
                  重置
                </base-button>
              </section>
            </component>
          </component>
        </template>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.base-json-form {
}
</style>
