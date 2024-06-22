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

## API

| 参数           | 说明                                                                                           | 类型                                                             | 默认值         | 版本  |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------- | ----- |
| ...            | 继承`TForm` \| `TTable` 字段                                                                   | `unknown`                                                        | \-             |       |
| action         | 右边操作按钮                                                                                   | `v-slot`                                                         | \-             |       |
| autoFetch      | 自动请求                                                                                       | `boolean`                                                        | `true`         |       |
| colon          | 是否显示分号                                                                                   | `boolean`                                                        | \-             |       |
| columns        | 表格项, `key` 支持 `aa.bb` 模式，提交转换成对象`aa: {bb: val}`; `value` 是 `字符串` 是 `label` | `Record<key \| v-slot, string \| BaseJsonFormColumn>`            | {}             |       |
| inputs         | 表单项, `key` 支持 `aa.bb` 模式，提交转换成对象`aa: {bb: val}`; `value` 是 `字符串` 是 `label` | `v-slot` \| `Record<key \| v-slot, string \| BaseJsonFormInput>` | {}             |       |
| labelAlign     | 标签对其方式                                                                                   | `'left'` \| `'right'` \| `'top'`                                 | \-             |       |
| layout         | 表单对其方式                                                                                   | `'inline'` \| `'vertical'`                                       | \-             |       |
| model          | 提交表单对应的 model                                                                           | `BaseJsonFormModel`                                              | {}             |       |
| modelValue     | 表格多选`数组`、单选`原始类型`返回勾选数据                                                     | `string[]` \| `number[]` \| `string` \| `number`                 | \-             | 1.0.1 |
| paginationType | 分页展现                                                                                       | `'pagination'` \|`'scroll'`                                      | `'pagination'` | 1.0.1 |
| query          | 查询按钮                                                                                       | `v-slot`                                                         | \-             |       |
| request        | 表单提交的接口或表格查询的接口                                                                 | `BaseJsonFormRequest`                                            | \-             |       |
| showQuery      | 是否显示查询按钮                                                                               | `boolean`                                                        | `true`         |       |
| span           | 整体分栏                                                                                       | `number`                                                         | 12             |       |
| table          | 表格                                                                                           | `v-slot`                                                         | `'table'`      |       |
| tableType      | 表格展现                                                                                       | `'table'` \|`'vxe'`                                              | `'table'`      | 1.0.1 |
| title          | 标题                                                                                           | `v-slot` \| `string`                                             | \-             |       |
| titleBold      | 标题加粗                                                                                       | `boolean`                                                        | \-             |       |
| type           | 展现方式, 未传递类型，有 `columns` 是 `query`, 没有是 `form`                                   | `'query'` \|`'form'`                                             | \-             |       |

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
| value    | 默认值                                   | `BaseJsonFormInputValue`                                                                          | \-       |       |
| width    | field 宽度                               | `string`                                                                                          | `'auto'` |       |

### BaseJsonFormColumn 属性

| 参数     | 说明                                                   | 类型                                    | 默认值           | 版本  |
| -------- | ------------------------------------------------------ | --------------------------------------- | ---------------- | ----- |
| after    | 后面                                                   | `string`                                | \-               | 1.0.1 |
| align    | 对齐方式                                               | `'left'` \| `'right'` \| `'center'`     | `'left'`         |       |
| append   | 结尾                                                   | `string`                                | \-               | 1.0.1 |
| before   | 前面                                                   | `string`                                | \-               | 1.0.1 |
| ellipsis | 省略号                                                 | `boolean`                               | `true`           |       |
| fixed    | 固定, 左边第一个默认固定在左边，右边最后一个固定在右边 | `'left'` \| `'right'`                   | \-               |       |
| if       | 判断，用于动态控制显示和隐藏，默认都展示               | `(model: BaseJsonFormModel) => boolean` | \-               |       |
| label    | 标签, `字符串`有`*`代表必填                            | `string` \| `v-slot`                    | \-               |       |
| minWidth | column 最小宽度                                        | `string`                                | `'auto'`         |       |
| prefix   | 前缀                                                   | `string`                                | \-               | 1.0.1 |
| prepend  | 开头                                                   | `string`                                | \-               | 1.0.1 |
| required | 必填                                                   | `boolean`                               | \-               | 1.0.1 |
| subLabel | 副标签, `字符串`有`*`代表必填                          | `string` \| `v-slot`                    | \-               | 1.0.1 |
| suffix   | 后缀                                                   | `string`                                | \-               | 1.0.1 |
| tips     | 标签后面提示文案                                       | `string`                                | \-               | 1.0.1 |
| type     | 类型                                                   | `BaseJsonFormInputType`                 | `'display-text'` |       |
| width    | column 宽度                                            | `string`                                | `'auto'`         |       |

#### BaseJsonFormInputType 属性

- 需要提供注入类型功能，方便扩充 1.0.2

| 类型                  | 说明             | TDesign                           | 版本  |
| --------------------- | ---------------- | --------------------------------- | ----- |
| cascader              | 级联选择器       | Cascader 级联选择器               |       |
| checkbox              | 多选框           | Checkbox 多选框                   |       |
| color                 | 颜色             | ColorPicker 颜色选择器            |       |
| date                  | 日期             | DatePicker 日期选择器             |       |
| date-range            | 日期范围         | DatePicker 颜色选择器             |       |
| datetime              | 日期时间         | DatePicker 日期选择器             |       |
| datetime-local        |                  | DatePicker 日期选择器             |       |
| datetime-range        | 日期时间范围     | DatePicker 日期选择器             |       |
| display-date          | 显示日期         |                                   | 1.0.1 |
| display-date-range    | 显示日期范围     |                                   | 1.0.1 |
| display-datetime      | 显示日期时间     |                                   | 1.0.1 |
| display-datetime-rang | 显示日期时间范围 |                                   | 1.0.1 |
| display-number        | 显示数字         |                                   | 1.0.1 |
| display-text          | 显示文本         |                                   |       |
| email                 | 邮箱             | -                                 |       |
| file                  | 文档             | Upload 上传                       |       |
| hidden                | 隐藏             | -                                 |       |
| image                 | 图片             | Upload 上传                       |       |
| month                 | 月               | DatePicker 日期选择器             |       |
| number                | 数字             | InputNumber 数字输入框            |       |
| radio                 | 单选框           | Radio 单选框                      |       |
| range                 | 范围             | Slider 滑块                       |       |
| search                | 搜索             | AutoComplete 自动填充（二次开发） |       |
| select                | 选择器           | Select 选择器                     |       |
| switch                | 开关             | Switch 开关                       |       |
| tel                   | 电话             | -                                 |       |
| text                  | 输入框           | Input 输入框                      |       |
| textarea              | 文本框           | Textarea 多行文本框               |       |
| time                  | 时间             | TimePicker 时间选择器             |       |
| tree-select           | 树选择           | TreeSelect 树选择                 |       |
| url                   | 地址             | -                                 |       |
| week                  | 周               | DatePicker 日期选择器             |       |

### 类型定义

```ts
export type BaseJsonFormModel = Record<string, BaseJsonFormInputValue>;
export type BaseJsonFormInputValue =
  | string
  | number
  | boolean
  | string[]
  | number[];
export type BaseJsonFormInputOption = {
  label: string;
  value: BaseJsonFormInputValue;
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
| init               | 初始化         | `() => void`                                                                                          | \-     |      |
| model              | 获取 flatModel | `() => BaseJsonFormModel`                                                                             | \-     |      |
| clearValidate      |                | `(fields?: Array<keyof FormData>)`                                                                    | \-     |      |
| reset              |                | `(params?: FormResetParams<FormData>)`                                                                | \-     |      |
| setValidateMessage |                | `(message: FormValidateMessage<FormData>)`                                                            | \-     |      |
| submit             |                | `(params?: { showErrorMessage?: boolean })`                                                           | \-     |      |
| validate           |                | `(params?: FormValidateParams) => Promise<FormValidateResult<FormData>>`                              | \-     |      |
| validateOnly       |                | `(params?: Pick<FormValidateParams, 'fields' \| 'trigger'>) => Promise<FormValidateResult<FormData>>` | \-     |      |
