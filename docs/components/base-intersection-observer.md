# BaseIntersectionObserver 交叉

增加`交叉`组件，控制元素是否显示

## 使用场景

### 滚动加载

- ~~原始方案，scroll 并且判断 是否滚动到底, 最主要没有到底方法，每次需要`scrollHeight`太麻烦~~
- 优化方法，滚动底部放`BaseIntersectionObserver`元素，如果触发了`enter`即显示了就是到底部

## Demo

<preview path="./base-intersection-observer-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明 | 类型                                                | 默认值  | 版本 |
| -------- | ---- | --------------------------------------------------- | ------- | ---- |
| disabled | 禁用 | `boolean`                                           | `false` |      |
| enter    | 出现 | `v-slot`                                            | \-      |      |
| leave    | 离开 | `v-slot`                                            | \-      |      |
| observer | 离开 | `v-slot:(entry: IntersectionObserverEntry) => void` | \-      |      |
