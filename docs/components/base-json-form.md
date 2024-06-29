# BaseJsonForm

我们在写中台每天就是和表格、表单打交道，能不能有个整个让我们方便操作

## 场景

### 普通场景

- 普通表单
- 查询+表格
- 查询+action+表格

### 复杂操作

- tabs + 表单（每个 tab 对应一个表单）
- tabs（整个表单一起提交） + 表单
- steps + 表单（每个 step 对应一个表单, 每步可以单独提交，也可以最后一步提交）

## 典型表单

<preview path="./base-json-form-typical.vue"></preview>

## 登录表单

<preview path="./base-json-form-login.vue"></preview>

## 不同对齐方式的表单

<preview path="./base-json-form-alignment.vue"></preview>

## 不同布局类型的表单

<preview path="./base-json-form-layout.vue"></preview>

## 支持默认值

<preview path="./base-json-form-value.vue"></preview>

## 对象表单

<preview path="./base-json-form-object.vue"></preview>

## 动态表单

<preview path="./base-json-form-dynamic.vue"></preview>

## 不同 span 的表单

<preview path="./base-json-form-span.vue"></preview>

## 自定义插槽

<preview path="./base-json-form-custom-slot.vue"></preview>

## 使用 group 完成复杂表单项

<preview path="./base-json-form-group.vue"></preview>

## 左边表单

- `每个`选项卡提交

<preview path="./base-json-form-tabs-left.vue"></preview>

## 头部表单

- 一次性提交, 有错误切换到`错误选项卡`

<preview path="./base-json-form-tabs-top.vue"></preview>

## 步骤表单

- 分步校验（也支持提交）
- 最后一步`一次性`提交

<preview path="./base-json-form-step.vue"></preview>

## 典型表格

- 默认分页加载

<preview path="./base-json-form-table.vue"></preview>

## 表格多选

<preview path="./base-json-form-table-checkbox.vue"></preview>

## 表格单选

<preview path="./base-json-form-table-radio.vue"></preview>

## 表格索引

<preview path="./base-json-form-table-index.vue"></preview>

## TODO: 树形表格

## 树状筛选列表页

<preview path="./base-json-form-tree-table.vue"></preview>

## 卡片列表

- 默认滚动加载

<preview path="./base-json-form-list.vue"></preview>

## API

| 参数           | 说明                                                                                           | 类型                                                             | 默认值    | 版本  |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------- | ----- |
| ...            | 继承`TForm` \| `TTable` 字段                                                                   | `unknown`                                                        | \-        |       |
| action         | 右边操作按钮                                                                                   | `v-slot`                                                         | \-        |       |
| autoFetch      | 自动请求，是`query`的自动请求为`true`                                                          | `boolean`                                                        | \-        |       |
| colon          | 分号                                                                                           | `boolean`                                                        | `false`   |       |
| columns        | 表格项, `key` 支持 `aa.bb` 模式，提交转换成对象`aa: {bb: val}`; `value` 是 `字符串` 是 `label` | `Record<key \| v-slot, string \| BaseJsonFormColumn>`            | {}        |       |
| inputs         | 表单项, `key` 支持 `aa.bb` 模式，提交转换成对象`aa: {bb: val}`; `value` 是 `字符串` 是 `label` | `v-slot` \| `Record<key \| v-slot, string \| BaseJsonFormInput>` | {}        |       |
| labelAlign     | 标签对其方式                                                                                   | `'left'` \| `'right'` \| `'top'`                                 | \-        |       |
| labelWidth     | 标签宽度                                                                                       | `string` \| `number`                                             | `100px`   |       |
| layout         | 表单对其方式                                                                                   | `'inline'` \| `'vertical'`                                       | \-        |       |
| list           | 表格                                                                                           | `v-slot`                                                         | \-        |       |
| listType       | 表格展现                                                                                       | `'table'` \|`'card'`                                             | `'table'` | 1.0.1 |
| model          | 提交表单对应的 model                                                                           | `BaseJsonFormModel`                                              | {}        |       |
| paginationType | 分页展现, 列表展现`card`默认`scroll`; `table`默认`pagination`                                  | `'pagination'` \|`'scroll'`                                      | \-        | 1.0.1 |
| query          | 查询按钮                                                                                       | `v-slot`                                                         | \-        |       |
| request        | 表单提交的接口或表格查询的接口                                                                 | `BaseJsonFormRequest`                                            | \-        |       |
| showQuery      | 是否显示查询按钮                                                                               | `boolean`                                                        | `true`    |       |
| span           | 整体分栏                                                                                       | `number`                                                         | 12        |       |
| title          | 标题                                                                                           | `v-slot` \| `string`                                             | \-        |       |
| titleBold      | 标题加粗                                                                                       | `boolean`                                                        | \-        |       |

### BaseJsonFormInput 属性

| 参数     | 说明                                     | 类型                                                                                              | 默认值   | 版本  |
| -------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- | -------- | ----- |
| ...      | 继承`TFormItem` \| `TField`字段          | `unknown`                                                                                         | \-       |       |
| append   | 结尾，包裹在灰色盒子内                   | `string`                                                                                          | \-       |       |
| bottom   | 底                                       | `string`                                                                                          | \-       | 1.0.1 |
| group    | 组合, 同名组合并在一起展示               | `[groupName: string, position?: 'top' \| 'bottom' \| 'left' \| 'right' \| 'prepend' \| 'append']` | \-       | 1.0.1 |
| if       | 判断，用于动态控制显示和隐藏，默认都展示 | `(model: BaseJsonFormModel) => boolean`                                                           | \-       |       |
| label    | 标签, `字符串`有`*`代表必填              | `string` \| `v-slot`                                                                              | \-       |       |
| left     | 左边                                     | `string`                                                                                          | \-       | 1.0.1 |
| on       | `on`前缀，触发原生事件, 例如 `onChange`  | `(model: BaseJsonFormModel, ...其他默认值) => void`                                               | \-       |       |
| options  | 选项集合、下拉、单选、多选               | `BaseJsonFormInputOption[]`                                                                       | \-       |       |
| outputs  | 输出项，onChange 触发                    | `Record<string, string \| (option: BaseJsonFormInputOption) => any>`                              | \-       |       |
| prefix   | 前缀                                     | `string`                                                                                          | \-       |       |
| prepend  | 开头，包裹在灰色盒子内                   | `string`                                                                                          | \-       |       |
| required | 必填                                     | `boolean`                                                                                         | \-       |       |
| right    | 右边                                     | `string`                                                                                          | \-       | 1.0.1 |
| span     | 拆分栏目, 没值使用整体`span`             | `number`                                                                                          | \-       |       |
| subLabel | 副标签, `字符串`有`*`代表必填            | `string` \| `v-slot`                                                                              | \-       | 1.0.1 |
| suffix   | 后缀                                     | `string`                                                                                          | \-       |       |
| tips     | 标签后面提示文案                         | `string`                                                                                          | \-       |       |
| top      | 顶                                       | `string`                                                                                          | \-       | 1.0.1 |
| type     | 类型                                     | `BaseJsonFormInputType`                                                                           | \-       |       |
| value    | 默认值                                   | `BaseJsonFormModelValue`                                                                          | \-       |       |
| width    | field 宽度                               | `string`                                                                                          | `'auto'` |       |

### BaseJsonFormColumn 属性

| 参数     | 说明                                                   | 类型                                    | 默认值   | 版本  |
| -------- | ------------------------------------------------------ | --------------------------------------- | -------- | ----- |
| align    | 对齐方式                                               | `'left'` \| `'right'` \| `'center'`     | `'left'` |       |
| append   | 结尾，灰色里面                                         | `string`                                | \-       | 1.0.1 |
| before   | 前面                                                   | `string`                                | \-       | 1.0.1 |
| bottom   | 底部                                                   | `string`                                | \-       | 1.0.1 |
| ellipsis | 省略号                                                 | `boolean`                               | `true`   |       |
| fixed    | 固定, 左边第一个默认固定在左边，右边最后一个固定在右边 | `'left'` \| `'right'`                   | \-       |       |
| if       | 判断，用于动态控制显示和隐藏，默认都展示               | `(model: BaseJsonFormModel) => boolean` | \-       |       |
| label    | 标签, `字符串`有`*`代表必填                            | `string` \| `v-slot`                    | \-       |       |
| left     | 左边                                                   | `string`                                | \-       | 1.0.1 |
| minWidth | column 最小宽度                                        | `string`                                | `'auto'` |       |
| prepend  | 开头，灰色里面                                         | `string`                                | \-       | 1.0.1 |
| required | 必填                                                   | `boolean`                               | \-       | 1.0.1 |
| right    | 右边                                                   | `string`                                | \-       | 1.0.1 |
| subLabel | 副标签,                                                | `string` \| `v-slot`                    | \-       | 1.0.1 |
| tips     | 标签后面提示文案                                       | `string`                                | \-       | 1.0.1 |
| top      | 上面                                                   | `string`                                | \-       | 1.0.1 |
| type     | 类型                                                   | `BaseJsonFormInputType`                 | `'text'` |       |
| width    | column 宽度                                            | `string`                                | `'auto'` |       |

#### BaseJsonFormInputType 属性

- 目前注入 TDesign 下输入组件

| 类型             | 说明                                | TDesign                   | 版本  |
| ---------------- | ----------------------------------- | ------------------------- | ----- |
| AutoComplete     | 自动填充                            | AutoComplete 自动填充     |       |
| Cascader         | 级联选择器                          | Cascader 级联选择器       |       |
| Checkbox         | 多选框组                            | CheckboxGroup 多选框      |       |
| ColorPicker      | 颜色                                | ColorPicker 颜色选择器    |       |
| DatePicker       | 日期                                | DatePicker 日期选择器     |       |
| Form             |                                     | Form 表单                 |       |
| Input            |                                     | Input 输入框              |       |
| InputAdornment   |                                     | InputAdornment 输入装饰器 |       |
| InputNumber      |                                     | InputNumber 数字输入框    |       |
| Radio            |                                     | RadioGroup 单选框         |       |
| RangeInput       |                                     | RangeInput 范围输入框     |       |
| Select           |                                     | Select 选择器             |       |
| SelectInput      |                                     | SelectInput 筛选器输入框  |       |
| Slider           |                                     | Slider 滑块               |       |
| Status           | 显示状态                            |                           | 1.0.1 |
| Switch           |                                     | Switch 开关               |       |
| TagInput         |                                     | TagInput 标签输入框       |       |
| Text             | 显示文本                            |                           | 1.0.1 |
| Textarea         |                                     | Textarea 多行文本框       |       |
| TimePicker       |                                     | TimePicker 时间选择器     |       |
| Transfer         |                                     | Transfer 穿梭框           |       |
| TreeSelect       |                                     | TreeSelect 树选择         |       |
| Upload           |                                     | Upload 上传               |       |
| 以下是自定义组件 |                                     |                           |       |
| Search           | 搜索组件，在Input基础上增加搜索icon | BaseSearch                |       |

### 类型定义

```ts
export type BaseJsonFormModel = Record<string, BaseJsonFormModelValue>;
export type BaseJsonFormModelValue =
  | string
  | number
  | boolean
  | string[]
  | number[];
export type BaseJsonFormInputOption = {
  label: string;
  value: BaseJsonFormModelValue;
  children?: BaseJsonFormInputOption[];
  [key: string]: any;
};
export type BaseJsonFormRequest = {
  (model: BaseJsonFormModel): Promise<
    any | { rows: BaseJsonFormRow[]; total?: number } | BaseJsonFormRow[]
  >;
};
```

## 组件实例方法

| 参数               | 说明           | 类型                                                                                                  | 默认值 | 版本 |
| ------------------ | -------------- | ----------------------------------------------------------------------------------------------------- | ------ | ---- |
| clearValidate      |                | `(fields?: Array<keyof FormData>)`                                                                    | \-     |      |
| init               | 初始化         | `() => void`                                                                                          | \-     |      |
| model              | 获取 flatModel | `() => BaseJsonFormModel`                                                                             | \-     |      |
| reset              |                | `(params?: FormResetParams<FormData>)`                                                                | \-     |      |
| setValidateMessage |                | `(message: FormValidateMessage<FormData>)`                                                            | \-     |      |
| submit             |                | `(params?: { showErrorMessage?: boolean })`                                                           | \-     |      |
| validate           |                | `(params?: FormValidateParams) => Promise<FormValidateResult<FormData>>`                              | \-     |      |
| validateOnly       |                | `(params?: Pick<FormValidateParams, 'fields' \| 'trigger'>) => Promise<FormValidateResult<FormData>>` | \-     |      |
