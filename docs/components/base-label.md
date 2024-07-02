# BaseLabel 标签

## 使用场景

- 表单的标签
- 表头的标签

## 默认注入`tdesign`组件, 也可以注入成其他`UI组件库`

```ts
import { type Component, ref } from 'vue';
import { Tooltip } from 'tdesign-vue-next';
import { HelpCircleIcon } from 'tdesign-icons-vue-next';
export const componentMap: Record<string, Component> = {
  Tooltip,
  HelpCircleIcon,
};
export const registerBaseLabelComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
```

## Demo

<preview path="./base-label-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明     | 类型                 | 默认值 | 版本 |
| -------- | -------- | -------------------- | ------ | ---- |
| default  | 主标题   | `v-slot`             | \-     |      |
| subLabel | 副标题   | `string` \| `v-slot` | \-     |      |
| tips     | 提示文字 | `string`             | \-     |      |
