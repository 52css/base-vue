<script lang="ts">
import { type Component, ref, computed } from 'vue';
import {
  Tooltip,
  Table,
  AutoComplete,
  Cascader,
  CheckboxGroup,
  ColorPicker,
  DatePicker,
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
  TreeSelect,
  Upload,
} from 'tdesign-vue-next';
import BaseJsonFormItem from './base-json-form-item.vue';
import BaseLabel from './base-label.vue';

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
  CheckboxGroup,
  ColorPicker,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputAdornment,
  InputNumber,
  TagInput,
  Radio,
  RangeInput,
  Select,
  SelectInput,
  Slider,
  Switch,
  Textarea,
  Transfer,
  TimePicker,
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
// console.log('getFormItemList.value', getFormItemList.value);
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
            :colon="colon"
            v-bind="$attrs"
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
