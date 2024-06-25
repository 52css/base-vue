# unplugin-vue-components

官网：<https://github.com/antfu/unplugin-vue-components>

unplugin-vue-components是一款组件自动导入Vite插件，可以自定义需要自动导入的组件目录，无需使用时手动导入。

## 依赖安装

```sh
pnpm install unplugin-vue-components -D
```

## 插件配置

在 vite.config.ts 中进行插件配置，如下：

```ts
export default defineConfig(){
  plugins:[
    // ...
    //自动导入组件，https://github.com/antfu/unplugin-vue-components
    Components({
      dts: "src/types/components.d.ts",
      dirs: ['src/components'],
      resolvers: [],
    }),
    // ...
  ]
}
```

上面已经配置了 vue 框架自动导入 API

## 第三方组件自动, 例如添加tdesign，其他组件可以查看对应的网站

```ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
export default {
  plugins:[
    // ...
    //自动导入Composition API,https://github.com/antfu/unplugin-auto-import
    Components({
      dts: "src/types/components.d.ts",
      dirs: ['src/components'],
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    // ...
  ]
};
```
