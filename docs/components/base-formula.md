# BaseFormula 公式

## 使用场景

- 需要编辑器输入标签
- 原始方案~~使用div嵌套，conenteditable="false", 各种问题，还需要零宽字符~~
- 优化方案~~使用自结束标签支持::before、::after, 相比很优秀了，但是选中`Selection`没有蓝色效果~~
- 最优方案，我们可以通过`BaseSvgHtml`转换成`img`图片，适用各种场景

## Demo

<preview path="./base-formula-demo.vue" title="基本使用"></preview>

## API

| 参数       | 说明     | 类型       | 默认值 | 版本 |
| ---------- | -------- | ---------- | ------ | ---- |
| modelValue | 选中的值 | `string`   | `''`   | ---- |
| tagList    | 标签列表 | `string[]` | `[]`   | ---- |
