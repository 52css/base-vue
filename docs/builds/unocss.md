# vue3 添加 unocss

## 安装第三方依赖

```sh
pnpm i -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

## 修复vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      // 使用Unocss
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
});
```

## main.ts 增加依赖

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入Unocss
import 'virtual:uno.css'
createApp(App).mount('#app')
```
