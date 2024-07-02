# BaseSvgHtml SvgHtml

## 使用场景

### 我们需要对局部 html 操作可以通过 svg 的 foreignObject 嵌套 body 直接使用

- 局部区域图片到本地
- html 局部打印

## 注意

- 如果写了 `style`定义全局唯一样式名称，不要和外部样式冲突

## Demo

<preview path="./base-svg-html-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明 | 类型                 | 默认值   | 版本 |
| ------- | ---- | -------------------- | -------- | ---- |
| default | 内容 | `v-slot`             | \-       |      |
| height  | 高度 | `string` \| `number` | `'100%'` |      |
| width   | 宽度 | `string` \| `number` | `'100%'` |      |
