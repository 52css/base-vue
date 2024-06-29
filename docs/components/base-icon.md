# BaseIcon 图标

## 前置条件

安装依赖

```sh
pnpm add vite-svg-loader -D
```

修改`vite.config.ts`

```ts
import svgLoader from 'vite-svg-loader';

export default defineConfig(){
    plugins:[
      ...
       /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader({
        svgo: true, // 开启 SVGO 压缩
        svgoConfig: {
          plugins: [
            {
              name: 'prefixIds',
              // params: {
              //   prefix: Math.random().toString(32).slice(2),
              // },
            },
          ],
        },
      }),
      ...
    ]
}
```

## 使用场景

- 使用设计提供 svg 作为图标，相比字体简单方便~~制作 svg，上次字体库，导出新地址（经常生成很慢）~~

## Demo

<preview path="./base-icon-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明                       | 类型                 | 默认值 | 版本 |
| ------- | -------------------------- | -------------------- | ------ | ---- |
| default | 默认插槽，和 icon 相差 8px | `v-slot`                   | \-     |      |
| height  | 高度                       | `string` \| `number` | \-     |      |
| name    | 名称                       | `string`             | \-     |      |
| size    | 大小                       | `string` \| `number` | \-     |      |
| width   | 宽度                       | `string` \| `number` | \-     |      |
