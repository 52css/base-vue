import { defineConfig } from "vitepress";
import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Base Vue",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Components",
        items: [
          // { text: "MyComponent", link: "/components/my-component" },
          // { text: "BaseJsonForm", link: "/components/base-json-form" },
          { text: "BaseIntersectionObserver 交叉", link: "/components/base-intersection-observer" },
          { text: "BaseResizeObserver 变更", link: "/components/base-resize-observer" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
});
