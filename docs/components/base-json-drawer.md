# BaseJsonDrawer 抽屉

## 使用场景

- 弹窗需要有展示的表单提交

## 默认注入`tdesign`组件, 也可以注入成其他`UI组件库`

```ts
import { type Component, ref } from 'vue';
import { Drawer } from 'tdesign-vue-next';
export const componentMap: Record<string, Component> = {
  Drawer,
};
export const registerBaseJsonDrawerComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
```

## Demo

<preview path="./base-json-drawer-demo.vue" title="基本使用"></preview>

## API

| 参数              | 说明                               | 类型     | 默认值   | 版本 |
| ----------------- | ---------------------------------- | -------- | -------- | ---- |
| ...               | 继承`Dialog` 和 `BaseJsonForm`属性 | \-       | \-       |      |
| cancelButtonText  | 取消文案                           | `string` | `'取消'` |      |
| confirmButtonText | 确定文案                           | `string` | `'确定'` |      |
| size              | 尺寸                               | `string` | \-       |      |
