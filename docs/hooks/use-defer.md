# useDefer 控制响应才处理

## 使用场景

- 面对 for 循环高频组件

## 使用方式

```ts
const defer = useDefer();
```

```html
<template v-for="(item, itemIndex) in 100">
  <div v-if="defer(itemIndex)">做其他事情</div>
</template>
```

<!-- ## Demo

<preview path="./use-debounce-demo.vue" title="基本使用"></preview> -->

## API

| 参数     | 说明         | 类型     | 默认值 | 版本 |
| -------- | ------------ | -------- | ------ | ---- |
| maxCount | 最大控制数量 | `number` | '100'  |      |

## 调用示例

| 参数   | 说明     | 类型     | 默认值 | 版本 |
| ------ | -------- | -------- | ------ | ---- |
| number | 控制数量 | `number` | \-     |      |
