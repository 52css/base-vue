# BasePrint 打印

## 使用场景

### 有些时候我们需要对局部打印

- 可以通过 iframe 打印指定 dom，~~但是必须加载所有样式~~
- 可以通过 svg+foreignObject 方案支持嵌套 html

## Demo

<preview path="./base-print-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明   | 类型                          | 默认值        | 版本 |
| -------- | ------ | ----------------------------- | ------------- | ---- |
| height   | 高度   | `string` \| `number`          | \-            |      |
| layout   | 布局   | `'landscape'` \| `'portrait'` | `'landscape'` |      |
| width    | 宽度   | `string` \| `number`          | \-            |      |
| zoomable | 可缩放 | `boolean`                     | `false`       |      |
