import { App, Component } from 'vue';
import { useAsyncRef } from './hooks/use-async-ref';
// 导入Unocss
import 'virtual:uno.css'

const componentFileMap = import.meta.glob('./components/**/**.vue', {
  eager: true,
});

// console.log('vueFileMap', vueFileMap);

// export { MyComponent, BaseIntersectionObserver, BaseResizeObserver };

export { useAsyncRef };

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
