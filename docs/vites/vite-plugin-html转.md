# vite-plugin-html

官网地址：<https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md>

vite-plugin-html 插件可以在 html 页面中使用 ejs 语法，动态注入数据。

## 依赖安装

```sh
pnpm install vite-plugin-html -D
```

## 插件配置

1 在 vite.config.ts 中进行插件配置，如下：

```ts
export default defineConfig(){
  plugins:[
    ...
    //在html中创建ejs标签，官网地址：https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md
    createHtmlPlugin({
      // 是否压缩 html
      minify: true,
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: env.VITE_SYSTEM_TITLE,
          description: env.VITE_SYSTEM_DESC
        }
      }
    }),
    ...
  ]
}
```

inject 中的 data 就是要注入的变量参数，env 为环境变量参数。可以通过一下代码获取到：

```ts
import { loadEnv } from 'vite';
const env = loadEnv(mode, process.cwd());
```

2 修改 index.html 文件，将 vite-plugin-html 插件注入的数据，通过 ejs 语法写入 index.html,如下:

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="<%=description%>" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <title><%= title %></title>
  </head>

  <body>
    <div id="app">
      <div id="loading"></div>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```
