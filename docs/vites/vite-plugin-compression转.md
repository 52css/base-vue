# vite-plugin-compression

官网：<https://github.com/vbenjs/vite-plugin-compression>

`gzip` 压缩：当前端资源过大时，服务器请求资源会比较慢。前端可以将资源通过 `Gzip` 压缩使文件体积减少大概 60%左右，压缩后的文件，通过后端简单处理，浏览器可以将其正常解析出来。如果浏览器的请求头中包含 `content-encoding: gzip`，即证明浏览器支持该属性。

`vite` 中使用 `vite-plugin-compression` 插件可以很便捷的对代码进行 `gzip` 压缩，减少代码体积，加快浏览器访问速度。压缩的代码放到服务器后，需要后端配置一些东西，浏览器才可以解析。比如可以配置 nginx.

## 依赖安装

```sh
pnpm install vite-plugin-compression -D
```

## 插件配置

在 `vite.config.ts` 中进行插件配置，如下：

```ts
// 引入vite-plugin-compression模块
import viteCompression from 'vite-plugin-compression';
export default defineConfig(){
  plugins:[
    ...
    viteCompression()
    ...
  ]
}
```
