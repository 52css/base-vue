# BaseJsonFormItem Form 项

## 使用场景

### 配合 `BaseJsonForm` 使用，可以使用 `group`来组合使用

## 左边下拉，右边输入

<preview path="./base-json-form-item-left-content.vue"></preview>

## 左边输入，右边勾选

<preview path="./base-json-form-item-content-right.vue"></preview>

## 上面是单选组，下面是提示文案

<preview path="./base-json-form-item-content-bottom.vue"></preview>

## 使用 prepend 和 append 包裹

<preview path="./base-json-form-item-prepend-content-append.vue"></preview>

## Demo

<preview path="./base-json-form-item-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明           | 类型     | 默认值 | 版本 |
| ------- | -------------- | -------- | ------ | ---- |
| append  | 内容右边，灰色 | `v-slot` | \-     |      |
| bottom  | 底             | `v-slot` | \-     |      |
| left    | 左             | `v-slot` | \-     |      |
| prepend | 内容左边，灰色 | `v-slot` | \-     |      |
| right   | 右             | `v-slot` | \-     |      |
| top     | 头             | `v-slot` | \-     |      |
