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

| 参数       | 说明                              | 类型      | 默认值 | 版本 |
| ---------- | --------------------------------- | --------- | ------ | ---- |
| ...        | 继承 `BaseJsonForm` 和 `Tree`属性 | \-        | \-     |      |
| activable  | 节点是否可高亮                    | `boolean` | `true` |      |
| expandAll  | 是否展开全部节点                  | `boolean` | `true` |      |
| hover      | 节点是否有悬浮状态                | `boolean` | `true` |      |
| transition | 节点展开折叠时是否使用过渡动画    | `boolean` | `true` |      |
