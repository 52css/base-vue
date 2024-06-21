# BaseIntersectionObserver 交叉

增加`交叉`组件，控制元素是否显示

## 使用场景

- 滚动加载，原生方案：scroll 并且判断 是否滚动到 底，优化方案：底部放 `BaseIntersectionObserver` 触发了 `enter` 事件即可

<preview path="./base-intersection-observer-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明 | 类型      | 默认值  | 版本 |
| -------- | ---- | --------- | ------- | ---- |
| disabled | 禁用 | `boolean` | `false` |      |
| enter    | 出现 | `v-slot`  | \-      |      |
| leave    | 离开 | `v-slot`  | \-      |      |
