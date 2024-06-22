# BaseStatus 状态

## 使用场景

### 表格显示状态字段

```html
<!-- 接口返回的状态str -->
<base-status value="进行中" />

<!-- 接口返回的状态 -->
<base-status
  :value="2"
  :options="[
    {label: '未开始', value: 0, theme: 'default'},
    {label: '进行中', value: 1, theme: 'primary'},
    {label: '已完成', value: 2, theme: 'success'},
    {label: '失败', value: 3, theme: 'error'}
  ]"
/>
```

## Demo

<preview path="./base-status-demo.vue" title="基本使用"></preview>

## Variant

<preview path="./base-status-variant.vue" title="variant"></preview>

## API

| 参数    | 说明                                       | 类型                                                         | 默认值  | 版本 |
| ------- | ------------------------------------------ | ------------------------------------------------------------ | ------- | ---- |
| options | 设置选项                                   | `BaseStatusOption`                                           | \-      |      |
| theme   | 主题色，设置优先级最高，没有是 `'primary'` | `'primary'` \| `'success'` \| `'danger'` \| `'default'`      | \-      |      |
| value   | 值，没有 options 是 label                  | `string` \| `number`                                         | \-      |      |
| variant | 形变,                                      | `'dot'` \| `'fill'` \| `'outline'` \| `'dashed'` \| `'text'` | `'dot'` |      |

### BaseStatusOption 属性

| 参数  | 说明 | 类型                                                    | 默认值 | 版本 |
| ----- | ---- | ------------------------------------------------------- | ------ | ---- |
| label | 标签 | `string`                                                | \-     |      |
| theme | 主题 | `'primary'` \| `'success'` \| `'danger'` \| `'default'` | \-     |      |
| value | 值   | `string` \| `number`                                    | \-     |      |
