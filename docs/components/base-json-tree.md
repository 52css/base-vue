# BaseJsonTree Tree 支持搜索

## 使用场景

- 接口获取数据
- 支持项搜索（基本上接口）

## 默认注入`tdesign`组件, 也可以注入成其他`UI组件库`

```ts
import { type Component, ref } from 'vue';
import { Tree } from 'tdesign-vue-next';
export const componentMap: Record<string, Component> = {
  Tree,
};
export const registerBaseJsonTreeComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
```

## Demo

<preview path="./base-json-tree-demo.vue" title="基本使用"></preview>

## API

| 参数 | 说明                              | 类型 | 默认值 | 版本 |
| ---- | --------------------------------- | ---- | ------ | ---- |
| ...  | 继承 `BaseJsonForm` 和 `Tree`属性 | \-   | \-     |      |
