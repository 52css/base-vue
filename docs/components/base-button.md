# BaseButton 按钮

## 使用场景

- 普通按钮点击后执行一个 promise，这段时间按钮是锁住的，可以栏架 onClick 事件，判断是 异步 等待请求结果把锁放开
- 表格中操作按钮，现在是弱提示，结合 `popconfirm` 之后再执行

## 默认注入`tdesign`组件, 也可以注入成其他`UI组件库`

```ts
import { type Component, ref } from 'vue';
import { Button, Popconfirm } from 'tdesign-vue-next';
export const componentMap: Record<string, Component> = {
  Button,
  Popconfirm,
};
```

## Demo

<preview path="./base-button-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明                                        | 类型                          | 默认值 | 版本 |
| ------- | ------------------------------------------- | ----------------------------- | ------ | ---- |
| confirm | 提示文案                                    | `string`                      | \-     |      |
| onClick | 点击事件, 如果是 `confirm` 代替 `onConfirm` | `(e: Event) => promise<void>` | \-     |      |
