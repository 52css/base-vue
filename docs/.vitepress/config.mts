import { defineConfig } from 'vitepress';
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';
// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Base Vue',
  description: 'A VitePress Site',
  base: '/base-vue/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: getSidebar({
      contentRoot: '/docs',
      contentDirs: ['components', 'hooks', 'vites'],
      collapsible: true,
      collapsed: false,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  vite: {
    plugins: [
      Unocss({
        // 使用Unocss
        presets: [presetUno(), presetAttributify(), presetIcons()],
      }),
    ],
  },
});
