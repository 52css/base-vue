import { defineConfig } from 'vitepress';
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';
// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import svgLoader from 'vite-svg-loader';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Base Vue',
  description: 'Vue 组件加强版',
  base: '/base-vue/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/guide/', activeMatch: '^/guide/' },
      {
        text: '组件',
        link: '/components/base-button',
        activeMatch: '^/components/',
      },
      {
        text: '更新日志',
        link: 'https://github.com/52css/base-vue',
      },
    ],

    sidebar: getSidebar({
      contentRoot: '/docs',
      contentDirs: ['components', 'hooks', 'vites', 'interview', 'ts', 'software'],
      collapsible: true,
      collapsed: false,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/52css/base-vue' },
    ],

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'X51HWTCQJJ',
      //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      //   indexName: 'el-pro'
      // }
    },
  },
  markdown: {
    theme: "github-dark",
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
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader({
        svgo: true, // 开启 SVGO 压缩
        svgoConfig: {
          plugins: [
            {
              name: 'prefixIds',
              // params: {
              //   prefix: Math.random().toString(32).slice(2),
              // },
            },
          ],
        },
      }),
    ],
  },
});
