import { App, Component } from 'vue';

const componentFileMap = import.meta.glob('./components/**/**.vue', {
  eager: true,
});

// console.log('vueFileMap', vueFileMap);

// export { MyComponent, BaseIntersectionObserver, BaseResizeObserver };

export interface Module {
  default: Component;
}

// 默认导出
export default {
  install(app: App) {
    Object.keys(componentFileMap).forEach((filePath) => {
      const c = (componentFileMap[filePath] as Module).default;
      app.component(c.name as string, c);
    });
  },
};
