# BaseResizeObserver 尺寸变更

## 使用场景

### 元素一行居中、多行左对其并且缩进1个字

* 元素一行居中、多行左对 可以参考 [github](https://github.com/XboxYan/notes/issues/13)
* 多行才缩进如何实现呢，可以增加 `BaseResizeObserver` 监控高度是否超出`行高`

## Demo

<preview path="./base-resize-observer-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明 | 类型                                          | 默认值 | 版本 |
| -------- | ---- | --------------------------------------------- | ------ | ---- |
| observer | 离开 | `v-slot:(entry: ResizeObserverEntry) => void` | \-     |      |
