# vite-plugin-svg-icons

官网:<https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md>

vite-plugin-svg-icons 是一款用于生成 svg 雪碧图的插件，能够将本地指定文件目录下的 Svg 生成一张雪碧图，在项目运行时就生成所有图标,只需操作一次 dom,内置缓存,仅当文件被修改时才会重新生成。通过 Svg 名称便可以加载对应的 Svg 图标。

## 依赖安装

```sh
pnpm install vite-plugin-svg-icons -D
```

## 插件配置

1 在 `vite.config.ts` 中进行插件配置，如下：

```ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default defineConfig(){
    plugins:[
      ...
      createSvgIconsPlugin({
       //// 指定需要缓存的svg图标文件夹
       iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
       // 指定symbolId格式
       symbolId: 'icon-local-[dir]-[name]`,
       // 自定义插入位置,@default: body-last
       inject: 'body-last',
       //自定义domId,默认：__svg__icons__dom__
       customDomId: '__SVG_ICON_LOCAL__'
      })
      ...
    ]
}
```

2 在 `main.js` 中增加以下代码

```ts
import 'virtual:svg-icons-register';
```

3 将需要的 svg 图标放入与 iconDirs 设置的路径中，项目中为 src/assets/svg

```html
<svg aria-hidden="true" style="width: 14px; height: 14px">
  <use :href="`#icon-local-${menu.icon}`" />
</svg>
```

menu.icon 是路径里面的 svg 图片名称。这个是简单用法，项目中已封装成了组件 SvgIcon,请前往自行查看。

4 如果使用 Typescript,你可以在 tsconfig.json 内添加:

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vite-plugin-svg-icons/client"]
  }
}
```
