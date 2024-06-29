# BaseContextmenu 右键事件

## 使用场景

### 在某个元素上右键，出现相应的菜单操作

## Demo

<preview path="./base-contextmenu-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明     | 类型                                          | 默认值 | 版本 |
| -------- | -------- | --------------------------------------------- | ------ | ---- |
| menu     | 菜单     | `BaseContextmenuMenuItem[]`                   | `[]`   |      |
| onSelect | 选中触发 | `(menuItem: BaseContextmenuMenuItem) => void` | \-     |      |

### BaseContextmenuMenuItem 属性

| 参数  | 说明     | 类型                 | 默认值 | 版本 |
| ----- | -------- | -------------------- | ------ | ---- |
| label | 显示文字 | `string`             | \-     |      |
| value | 显示值   | `string` \| `number` | \-     |      |
