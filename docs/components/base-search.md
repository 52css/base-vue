# BaseSearch 搜索

## 使用场景

### 设计有些时候为了强调`搜索功能`， 只有一个元素会添加图标

- 背后有个搜索图标
- 支持`onSubmit`方法，默认`enter`触发

## 默认注入`tdesign`组件, 也可以注入成其他`UI组件库`

```ts
import { type Component, ref } from 'vue';
import { Input } from 'tdesign-vue-next';
import { SearchIcon } from 'tdesign-icons-vue-next';
export const componentMap: Record<string, Component> = {
  Input,
  SearchIcon,
};
export const registerBaseSearchComponent = (
  name: string,
  component: Component
) => {
  componentMap[name] = component;
};
```

## Demo

<preview path="./base-search-demo.vue" title="基本使用"></preview>

## API

| 参数      | 说明            | 类型                  | 默认值    | 版本 |
| --------- | --------------- | --------------------- | --------- | ---- |
| ...       | 继承`Input`组件 | \-                    | \-        |      |
| clearable | 是否可清空      | `boolean`             | `true`    |      |
| trigger   | 触发方式        | `'enter'` \| `'blur'` | `'enter'` |      |
