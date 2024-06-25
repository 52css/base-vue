# rollup-plugin-visualizer

官网：<https://github.com/btd/rollup-plugin-visualizer>

rollup-plugin-visualizer 是一个用于 Rollup 构建工具的插件，一款用于项目性能优化，打包体积分析，能够生成可视化的构建报告，帮助开发者更好地了解构建过程中的文件大小、依赖关系等信息的插件。

## 依赖安装

```sh
pnpm install rollup-plugin-visualizer -D
```

## 插件配置

1 在 vite.config.ts 中进行插件配置，如下：

```ts
// 引入rollup-plugin-visualizer模块
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig(){
  plugins:[
    ...
    visualizer({
      //注意这里要设置为true，打包时会自动打开分析页面。
      open:true,
      //分析图生成的文件名
      filename: "stats.html",
      //收集gzip大小并将其显示
      gzipSize: true, //
      //收集 brotli 大小并将其显示
      brotliSize: true,
    })
    ...
  ]
}
```

2 运行运行命令打包，生成分析图

输入 `pnpm build` 打包项目，等待片刻，生成分析视图，视图会自动跳出来，并保存在项目根目录下，文件名就是刚刚参数 filename 的名字（stats.html）

视图分析中方块越大，表示该文件占用的空间越大，对于网络带宽和访问速度的要求就越高。如果一个网站中包含大量的大文件，那么用户在访问该网站时需要下载更多的数据，这会导致网站加载速度变慢，用户体验变差。
