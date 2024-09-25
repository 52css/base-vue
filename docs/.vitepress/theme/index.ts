import DefaultTheme from 'vitepress/theme';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import BaseVue from '../../../src/index';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

import "./custom.css";

// 导入Unocss
import 'virtual:uno.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BaseVue);
    app.component('demo-preview', AntDesignContainer);
  },
};
