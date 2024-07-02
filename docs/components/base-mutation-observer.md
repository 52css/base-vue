# BaseMutationObserver 监控变更

## 使用场景

常用于`水印`操作

* 属性变更
* 子是否删除

## Demo

<preview path="./base-mutation-observer-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明     | 类型                                     | 默认值  | 版本 |
| -------- | -------- | ---------------------------------------- | ------- | ---- |
| disabled | 是否禁用 | `boolean`                                | `false` |      |
| observer | 离开     | `v-slot:(entry: MutationRecord) => void` | \-      |      |
