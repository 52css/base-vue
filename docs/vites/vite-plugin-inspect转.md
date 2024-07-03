# vite-plugin-inspect

官网:<https://github.com/antfu-collective/vite-plugin-inspect>

分析打包后的文件

## 依赖安装

```sh
pnpm install vite-plugin-inspect -D
```

## 插件配置

1 在 `vite.config.ts` 中进行插件配置，如下：

```ts
import Inspect from 'vite-plugin-inspect'

export default defineConfig(){
    plugins:[
      ...
      Inspect(),
      ...
    ]
}
```
