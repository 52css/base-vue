<script lang="ts">
import { type Component, ref } from 'vue';
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
  RadioGroup,
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
import { HelpCircleIcon } from 'tdesign-icons-vue-next';
import BaseJsonFormItem from './base-json-form-item.vue'

export interface BaseJsonFormProps {
  title?: string;
}
export const BaseJsonFormDefault = {};
export interface BaseJsonFormEmits {
  (event: 'event1'): void;
}
export const componentMap: Record<string, Component> = {
  Tooltip,
  HelpCircleIcon,
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
  RadioGroup,
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
withDefaults(defineProps<BaseJsonFormProps>(), BaseJsonFormDefault);
defineEmits<BaseJsonFormEmits>();
defineOptions({
  name: 'BaseJsonForm',
});
const formRef = ref();
const formData = ref({});
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
            :colon="true"
            v-bind="$attrs"
          >
            <component :is="componentMap.FormItem" name="name">
              <template #label>
                <section inline-flex items-center>
                  姓名1
                  <component
                    :is="componentMap.Tooltip"
                    content="这是Tooltip内容"
                  >
                    <component :is="componentMap.HelpCircleIcon" c-hex-999 />
                  </component>
                </section>
              </template>
              <base-json-form-item>
                <component
                  :is="componentMap.Input"
                  v-model="formData.name"
                  placeholder="请输入内容"
                  @enter="onEnter"
                />
              </base-json-form-item>
            </component>
          </component>
        </template>
      </div>
    </section>
    base-json-form
  </div>
</template>

<style scoped lang="scss">
.base-json-form {
}
</style>
