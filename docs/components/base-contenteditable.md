# BaseContenteditable 可编辑的

## 使用场景

- 当`Input`、`Textarea`不满足工作需求，需要使用 contenteditable 来模拟输入

## Demo

<preview path="./base-contenteditable-demo.vue" title="基本使用"></preview>

## API

| 参数       | 说明     | 类型     | 默认值 | 版本 |
| ---------- | -------- | -------- | ------ | ---- |
| modelValue | 绑定数据 | `string` | \-     |      |

## 组件实例方法

| 参数            | 说明                         | 类型                                   | 默认值 | 版本 |
| --------------- | ---------------------------- | -------------------------------------- | ------ | ---- |
| setSelection    | 设置选取                     | `(start: number, end: number) => void` | \-     |      |
| setRange        | 设置光标位置                 | `(position: number) => void`           | \-     |      |
| revertSelection | 还原选取                     | `() => void`                           | \-     |      |
| insertNode      | 插入节点, 没有选中插入到最后 | `(node: Node) => void`                 | \-     |      |
| insertText      | 插入文本                     | `(textNode: string) => void`           | \-     |      |
| insertMarkText  | 插入标记文本                 | `(textNode: string) => void`           | \-     |      |
| setMark         | 设置选取高亮                 | `() => void`                           | \-     |      |
