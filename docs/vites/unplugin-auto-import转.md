# unplugin-auto-import

官网：<https://github.com/antfu/unplugin-auto-import>

unplugin-auto-import 是为 Vite、Webpack、Rollup 和 esbuild 按需自动导入 API。例如：ref,reactive 等 API 无需额外导入，就可以全局使用。

## 依赖安装

```sh
pnpm install unplugin-auto-import -D
```

## 插件配置

在 vite.config.ts 中进行插件配置，如下：

```ts
export default defineConfig(){
  plugins:[
    // ...
      //自动导入Composition API,https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: "src/types/auto-import.d.ts",
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        // 路由是通过菜单自动注入
        // VueRouterAutoImports,
        'pinia',
      ],
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
    AutoImport({
      dts: "src/types/auto-import.d.ts",
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        // 路由是通过菜单自动注入
        // VueRouterAutoImports,
        'pinia',
      ],
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })],
    }),
    // ...
  ]
};
```
