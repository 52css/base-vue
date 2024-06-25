# unplugin-vue-setup-extend-plus

官网：<https://github.com/chenxch/unplugin-vue-setup-extend-plus>

Vue3 组件自定义命名插件，可以在`script`标签中，通过设置 name 属性为组件命名

## 3.1 依赖安装

```sh
pnpm install unplugin-vue-setup-extend-plus -D
```

## 3.2 插件配置

在 vite.config.ts 中进行插件配置，如下：

```ts
export default defineConfig(){
  plugins:[
    ...
    //官网：https://github.com/chenxch/unplugin-vue-setup-extend-plus
    vueSetupExtend({
      //禁止组件属性自动导出
      enableAutoExpose: false,
    }),
    ...
  ]
}
```

配置完毕后，我们可以为组件进行命名。例如:SvgIcon 组件：

```html
<script setup lang="ts" name="SvgIcon"></script>
```
