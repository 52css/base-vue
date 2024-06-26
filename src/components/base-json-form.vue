<script lang="ts">
import { type Component, ref, reactive, computed, watch, onMounted } from 'vue';
import BaseSearch from './base-search.vue';
// import { useVModel } from '@vueuse/core';
import {
  EnhancedTable as Table,
  // Table,
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
  type FormResetParams,
  type FormValidateMessage,
  type FormValidateParams,
} from 'tdesign-vue-next';
import { cloneDeep, set } from 'lodash-es';
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
  colKey?: string;
  [key: string]: any;
};
export type BaseJsonFromPageInfo = {
  current: number;
  pageSize: number;
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

export type BaseJsonFormListType = 'table' | 'list';

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
  paginationType?: BaseJsonFormPaginationType;
  request?: BaseJsonFormRequest;
  showQuery?: boolean;
  span?: number;
  title?: string;
  titleBold?: boolean;
  labelWidth?: string | number;
}
export const BaseJsonFormDefault = {
  colon: false,
  autoFetch: true,
  columns: () => ({}),
  inputs: () => ({}),
  // labelAlign: 'top' as BaseJsonFormLabelAlign,
  listType: 'table' as BaseJsonFormListType,
  model: () => ({}),
  // paginationType: 'pagination' as BaseJsonFormPaginationType,
  showQuery: true,
  span: 12,
  labelWidth: '100px',
};
export interface BaseJsonFormEmits {
  (event: 'event1'): void;
  (
    event: 'submit',
    res?: any | { rows: BaseJsonFormRow[]; total?: number } | BaseJsonFormRow[]
  ): void;
}

export const componentMap: Record<string, Component> = {
  Search: BaseSearch,
  Table,
  AutoComplete,
  Cascader,
  Checkbox,
  // CheckboxGroup,
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
const emit = defineEmits<BaseJsonFormEmits>();
defineOptions({
  name: 'BaseJsonForm',
});

//#region 表单
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
const noMore = ref(false);
const loading = ref(false);
const onSubmit = async (params: Record<string, any> = {}) => {
  const valid = await formRef.value.validate();
  const formModel = model();

  // console.log('valid', valid)
  if (valid === true) {
    if (loading.value) {
      return;
    }

    const lastParams = {
      pageNum: pagination.value.current,
      pageSize: pagination.value.pageSize,
      ...formModel,
      ...params,
    };

    formLastQueryModel.value = cloneDeep(lastParams);
    loading.value = true;
    try {
      const res = await props.request?.(lastParams);
      emit('submit', res);
      const isScroll = getPaginationType.value === 'scroll';
      if (getHasList.value) {
        let rows;
        let total;
        if (Array.isArray(res)) {
          rows = res;
        } else if (res) {
          rows = res.rows ?? [];
          total = res.total ?? 0;
        }

        pagination.value.total = total;

        if (isScroll) {
          if (pagination.value.current === 1) {
            tableData.value = rows;
          } else {
            tableData.value = tableData.value.concat(rows);
          }
          noMore.value = tableData.value.length >= total;
          if (!noMore.value) {
            pagination.value.current = pagination.value.current! + 1;
          }
        } else {
          tableData.value = rows;
        }
      }
    } finally {
      loading.value = false;
    }
  } else {
    throw new Error('校验不通过');
  }
};
const onQuery = async () => {
  if (getHasList.value) {
    pagination.value.current = 1;
  }
  await onSubmit();
};
const onReset = async (params?: FormResetParams<FormData>) => {
  formRef.value.reset(params);

  onQuery();
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
const useSetDefaultAndSetValue = () => {
  const setDefaultValue = () => {
    for (let [prop, val] of Object.entries(props.inputs)) {
      if (typeof val === 'object') {
        const defaultValue = getDefaultValueByType(val);
        formData.value[prop] =
          formData.value[prop] ?? val?.value ?? defaultValue;
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

  watch(
    () => props.model,
    (newVal) => {
      Object.keys(newVal).forEach((key) => {
        const val = newVal[key];

        setModelValue(key, val);
      });
      setDefaultValue();
    },
    {
      immediate: true,
    }
  );
};
const getLayout = computed(() => {
  return props.layout ?? (getHasList.value && 'inline');
});

useSetDefaultAndSetValue();
//#endregion

//#region 列表
const getHasList = computed(() => {
  return (
    props.listType === 'list' ||
    (props.listType === 'table' && Object.keys(props.columns).length > 0)
  );
});
const formLastQueryModel = ref();
const createReactiveColumn = (formInput: BaseJsonFormColumn) => {
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
        // const formModel = model();
        return typeof val === 'function' ? val(formLastQueryModel.value) : val;
      },
      // 设置可枚举，可以用直接 v-bind 绑定所有属性
      enumerable: true,
    });
  }

  return formItem;
};
const getColumnList = computed(() => {
  const columnList = [];
  const getColKey = (colKey: string) => {
    if (colKey === '$radio') {
      return {
        colKey: 'row-select',
        type: 'single',
      };
    } else if (colKey === '$checkbox') {
      return {
        colKey: 'row-select',
        type: 'multiple',
      };
    } else if (colKey === '$index') {
      return {
        colKey: 'serial-number',
      };
    }
    return {
      colKey,
    };
  };

  for (let [colKey, value] of Object.entries(props.columns)) {
    const colKeyParams = getColKey(colKey);
    if (typeof value === 'string') {
      const originLabel = value;
      const title = getLabel(originLabel);
      columnList.push(
        createReactiveColumn({
          ...colKeyParams,
          title,
          required: getRequired(undefined, originLabel),
          // type: 'Text',
        })
      );
    } else {
      const originLabel = value?.label;
      const title = getLabel(originLabel);

      columnList.push(
        createReactiveColumn({
          ...colKeyParams,
          ...value,
          title,
          required: getRequired(value.required, originLabel),
          // type: value?.type ?? 'Text',
        })
      );
      // rtv.push();
    }
  }

  return columnList.filter((x) => {
    if (x._if) {
      return x?._if(formLastQueryModel.value);
    }

    // if (x.group) {
    //   return !x.group?.[1];
    // }

    return true;
  });
});

const getColumnNoGroupList = computed(() => {
  return getColumnList.value.filter((x) => {
    if (x.group) {
      return !x.group[1];
    }

    return true;
  });
});
const pagination = ref({
  pageSize: 10,
  total: 0,
  current: 1,
  showPageSize: true,
  showJumper: true,
});
const init = (params?: Record<string, any>) => {
  if (getHasList.value) {
    pagination.value.current = 1;
    onSubmit(params);
  }
};
const tableData = ref();
const onPageChange = (pageInfo: BaseJsonFromPageInfo) => {
  pagination.value.current = pageInfo.current;
  pagination.value.pageSize = pageInfo.pageSize;
  onSubmit();
};
const getPaginationType = computed(() => {
  return (
    props.paginationType ??
    (props.listType === 'table' ? 'pagination' : 'scroll')
  );
});

onMounted(() => {
  props.autoFetch && init();
});
//#endregion

defineExpose({
  onSubmit,
  onQuery,
  onReset,
  model,
  init,
  clearValidate(fields?: Array<keyof FormData>) {
    return formRef.value.clearValidate(fields);
  },
  reset(params?: FormResetParams<FormData>) {
    return onReset(params);
  },
  setValidateMessage(message: FormValidateMessage<FormData>) {
    return formRef.value.setValidateMessage(message);
  },
  submit(params?: { showErrorMessage?: boolean }) {
    return formRef.value.submit(params);
  },
  validate(params?: FormValidateParams) {
    return formRef.value.validate(params);
  },
  validateOnly(params?: Pick<FormValidateParams, 'fields' | 'trigger'>) {
    return formRef.value.validateOnly(params);
  },
});
</script>

<template>
  <div class="base-json-form" flex flex-col gap-2>
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
            :labelWidth="labelWidth"
            :layout="getLayout"
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
                width: getHasList
                  ? 'auto'
                  : `calc(${((formItem.span ?? span) * 100) / 12}% - 1rem)`,
              }"
              :label-width="getHasList && !formItem.label ? 0 : labelWidth"
            >
              <template #label>
                <slot v-if="$slots[formItem.label]" :name="formItem.label" />
                <base-label v-else :tips="formItem.tips">
                  {{ formItem.label }}
                </base-label>
              </template>
              <slot
                v-if="$slots[formItem.prop]"
                :name="formItem.prop"
                :form-model="formData"
              />
              <base-json-form-item v-else>
                <base-json-form-field
                  :componentMap="componentMap"
                  :formData="formData"
                  :formItem="formItem"
                />
                <template #top>
                  <base-json-form-slot
                    :componentMap="componentMap"
                    :formData="formData"
                    :formItem="formItem"
                    :getFormItemList="getFormItemList"
                    position="top"
                  />
                </template>
                <template #left>
                  <base-json-form-slot
                    :componentMap="componentMap"
                    :formData="formData"
                    :formItem="formItem"
                    :getFormItemList="getFormItemList"
                    position="left"
                  />
                </template>
                <template #right>
                  <base-json-form-slot
                    :componentMap="componentMap"
                    :formData="formData"
                    :formItem="formItem"
                    :getFormItemList="getFormItemList"
                    position="right"
                  />
                </template>
                <template #bottom>
                  <base-json-form-slot
                    :componentMap="componentMap"
                    :formData="formData"
                    :formItem="formItem"
                    :getFormItemList="getFormItemList"
                    position="bottom"
                  />
                </template>
              </base-json-form-item>
            </component>
            <component
              :is="componentMap.FormItem"
              v-if="showQuery"
              :label-width="getHasList ? 0 : labelWidth"
              :class="[getHasList ? '' : 'w-full']"
            >
              <template #label> &nbsp; </template>
              <!-- getHasList: {{ getHasList }} -->
              <slot v-if="$slots.query" name="query" />
              <section v-else flex gap-2>
                <base-button theme="primary" @click="() => onQuery()">
                  {{ getHasList ? '查询' : '提交' }}
                </base-button>
                <base-button
                  theme="default"
                  variant="base"
                  @click="() => onReset()"
                >
                  重置
                </base-button>
              </section>
            </component>
          </component>
        </template>
      </div>
      <div class="base-json-form__action">
        <slot name="action" />
      </div>
    </section>
    <section v-if="getHasList" w-full flex>
      <div class="base-json-form__tree">
        <!-- todo:完善树形 -->
      </div>
      <div class="base-json-form__list" flex-1 min-w-0>
        <!-- columns: {{ getColumnNoGroupList }} -->
        <!-- tableData: {{ tableData }} -->
        <!-- selectedRowKeys: {{ selectedRowKeys }} -->
        <component
          v-if="listType === 'table'"
          v-bind="$attrs"
          :is="componentMap.Table"
          :columns="getColumnNoGroupList"
          :data="tableData"
          :pagination="
            getPaginationType === 'pagination' &&
            pagination.total > 0 &&
            pagination
          "
          @page-change="onPageChange"
        >
          <template v-for="(_value, name) in $slots" #[name]="scopeData">
            <slot :name="name" v-bind="scopeData" />
          </template>
          <template #cell-empty-content>
            <span c-hex-00000042> - </span>
          </template>
        </component>
        <slot v-else name="list" :data="tableData" :pagination="pagination" />

        <base-intersection-observer
          v-if="getPaginationType === 'scroll' && pagination.total > 0"
          :disabled="noMore"
          class="base-infinite-loading__loading secondary"
          font-size-3
          text-center
          @enter="onSubmit"
        >
          {{ noMore ? '没有更多了' : '加载中...' }}
        </base-intersection-observer>
      </div>
      <div class="base-json-form__selected">
        <!-- todo:完善选中表格 -->
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.base-json-form {
  :deep(.t-is-error > .t-input__extra) {
    color: var(--td-error-color);
  }
  :deep(.t-pagination__number) {
    margin-top: 0 !important;
  }
  :deep(.t-date-picker, .t-date-range-picker) {
    width: 100%;
  }
}
</style>
