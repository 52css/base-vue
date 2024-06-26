<script lang="ts">
import { type Component, ref, reactive, computed, watch } from 'vue';
import {
  Table,
  AutoComplete,
  Cascader,
  Checkbox,
  CheckboxGroup,
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
import { cloneDeep, set, isEqual } from 'lodash-es';
import BaseJsonFormItem from './base-json-form-item.vue';
import BaseJsonFormField from './base-json-form-field.vue';
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

export type BaseJsonFormGroupPosition =
  | 'top'
  | 'left'
  | 'bottom'
  | 'right'
  | 'prepend'
  | 'append';

export type BaseJsonFormInput = {
  append?: string;
  bottom?: string;
  group?: [string, BaseJsonFormGroupPosition];
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
  [key: string]: any;
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
  span: 12,
};
export interface BaseJsonFormEmits {
  (event: 'event1'): void;
}

export const componentMap: Record<string, Component> = {
  Table,
  AutoComplete,
  Cascader,
  Checkbox,
  CheckboxGroup,
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
const getLabel = (label?: string) => label?.replaceAll('*', '');
const getRequired = (required?: boolean, label?: string) =>
  required ?? /\*/.test(String(label));
const createReactiveFormItem = (formInput: BaseJsonFormInput) => {
  const formItem = reactive<Record<string, any>>({});
  for (const [key, val] of Object.entries(formInput)) {
    formItem[`_${key}`] = val;
    if (/^on/.test(key)) {
      formItem[key] = function (...args: any[]) {
        const formModel = model();
        val && val(formModel, ...args);
      };
      continue;
    }
    Object.defineProperty(formItem, key, {
      get() {
        const formModel = model();
        return typeof val === 'function' ? val(formModel) : val;
      },
      // 设置可枚举，可以用直接 v-bind 绑定所有属性
      enumerable: true,
    });
  }

  return formItem;
};
const getFormItemList = computed(() => {
  const formItemList = [];

  for (let [prop, value] of Object.entries(props.inputs)) {
    if (typeof value === 'string') {
      const originLabel = value;
      const label = getLabel(originLabel);
      formItemList.push(
        createReactiveFormItem({
          prop,
          label,
          required: getRequired(undefined, originLabel),
          type: 'Input',
        })
      );
    } else {
      const originLabel = value?.label;
      const label = getLabel(originLabel);

      formItemList.push(
        createReactiveFormItem({
          ...value,
          prop,
          label,
          required: getRequired(value.required, originLabel),
          type: value?.type ?? 'Input',
        })
      );
      // rtv.push();
    }
  }

  const formModel = model();
  return formItemList.filter((x) => {
    if (x._if) {
      return x?._if(formModel);
    }

    // if (x.group) {
    //   return !x.group?.[1];
    // }

    return true;
  });
});

const getFormItemNoGroupList = computed(() => {
  return getFormItemList.value.filter((x) => {
    if (x.group) {
      return !x.group[1];
    }

    return true;
  });
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
    ['CheckboxGroup', 'DateRangePicker', 'TagInput', 'RangeInput'].includes(
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
const setModelValue = (key: string, val: any) => {
  if (typeof val === 'object') {
    for (let [subKey, subVal] of Object.entries(val)) {
      if (props.inputs[`${key}.${subKey}`] !== undefined) {
        setModelValue(`${key}.${subKey}`, subVal);
      }
    }
  }

  formData.value[key] = val;
};
const model = () => {
  return Object.keys(formData.value).reduce((prev, item) => {
    // 前端过滤不是if展示的数据
    const param = props.inputs[item] as BaseJsonFormInput;
    const canSet = param && param._if ? param._if(formData.value) : true;

    if (canSet) {
      set(prev, item, formData.value[item]);
    }

    return prev;
  }, {});
};

const getGroupFromItem = (groupName: string, positionName?: string) => {
  const item = getFormItemList.value.find((x: any) =>
    isEqual(x?.group, [groupName, positionName])
  );

  return item;
  // return props..value.find(
  //   (x) => x?.group === [groupName, positionName]
  // );
};

watch(
  () => props.model,
  (newVal) => {
    Object.keys(newVal).forEach((key) => {
      const val = newVal[key];

      setModelValue(key, val);
    });
    // setModelValue(newVal);
    // formData.value = newVal;
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
    <section flex w-full>
      <div class="base-json-form__title">
        <slot v-if="$slots.title" />
        <template v-else>
          {{ title }}
        </template>
      </div>
      <div class="base-json-form__inputs" flex-1 min-w-0>
        <slot v-if="$slots.inputs" />
        <template v-else>
          <!-- {{ formData }} -->
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
            style="display: flex; flex-wrap: wrap; column-gap: 1rem"
          >
            <component
              v-for="formItem in getFormItemNoGroupList"
              v-bind="formItem"
              :is="componentMap.FormItem"
              :name="formItem.group ? false : formItem.prop"
              :prop="formItem.group ? false : formItem.prop"
              :key="formItem.prop"
              :rules="[
                {
                  required: formItem.group ? false : formItem.required,
                },
              ]"
              :style="{
                width: `calc(${((formItem.span ?? span) * 100) / 12}% - 1rem)`,
              }"
            >
              <template #label>
                <base-label :tips="formItem.tips">
                  {{ formItem.label }}
                </base-label>
              </template>
              <base-json-form-item>
                <base-json-form-field
                  :componentMap="componentMap"
                  :formData="formData"
                  :formItem="formItem"
                />
                <template #top>
                  <template v-if="formItem.group">
                    <base-json-form-field
                      :componentMap="componentMap"
                      :formData="formData"
                      :formItem="getGroupFromItem(formItem.group?.[0], 'top')"
                    />
                  </template>
                  <template v-else>
                    {{ formItem?.top }}
                  </template>
                </template>
                <template #left>
                  <template v-if="formItem.group">
                    <base-json-form-field
                      :componentMap="componentMap"
                      :formData="formData"
                      :formItem="getGroupFromItem(formItem.group?.[0], 'left')"
                    />
                  </template>
                  <template v-else>
                    {{ formItem?.left }}
                  </template>
                </template>
                <template #right>
                  <template v-if="formItem.group">
                    <base-json-form-field
                      :componentMap="componentMap"
                      :formData="formData"
                      :formItem="getGroupFromItem(formItem.group?.[0], 'right')"
                    />
                  </template>
                  <template v-else>
                    {{ formItem?.right }}
                  </template>
                </template>
                <template #bottom>
                  <template v-if="formItem.group">
                    <base-json-form-field
                      :componentMap="componentMap"
                      :formData="formData"
                      :formItem="getGroupFromItem(formItem.group?.[0], 'bottom')"
                    />
                  </template>
                  <template v-else>
                    {{ formItem?.bottom }}
                  </template>
                </template>
              </base-json-form-item>
            </component>
            <component :is="componentMap.FormItem" v-if="showQuery">
              <template #label> &nbsp; </template>
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
  :deep(.t-is-error > .t-input__extra) {
    color: var(--td-error-color);
  }
}
</style>
