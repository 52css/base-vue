# vite-my-git-plugin

## 使用场景

- 线上问题如何定位，如果访问一个地址或者一个 console 可以查看到最近构建信息是否解决我们问题

## 安装依赖

```sh
pnpm add @52css/vite-my-git-plugin -D
```

## 插件配置

1 在 vite.config.ts 中进行插件配置，如下：

```ts
// 引入rollup-plugin-visualizer模块
import { MyGitPlugin } from '@52css/vite-my-git-plugin'
export default defineConfig(){
  plugins:[
    ...
    MyGitPlugin('$git'), // 名称任意
    ...
  ]
}
```

2. 构建后访问 console.log

```js
console.log('$git'); // 可以查看构建COMMIT_ID、CURRENT_BRANCH、COMMIT_DETAIL、BUILD_TIME
```
