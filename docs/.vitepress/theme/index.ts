import DefaultTheme from 'vitepress/theme';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import BaseVue from '../../../src/index';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BaseVue);
    app.component('demo-preview', AntDesignContainer);
  },
};
