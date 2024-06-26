import { App, Component } from 'vue';
import { useAsyncRef } from './hooks/use-async-ref';
import { useEsc } from './hooks/use-esc';
import { useDPI } from './hooks/use-dpi';
import { sleep } from './utils/sleep';
import { registerBaseJsonFormComponent } from './components/base-json-form.vue';
import { registerBaseButtonComponent } from './components/base-button.vue';
// 导入Unocss
import 'virtual:uno.css';

const componentFileMap = import.meta.glob('./components/**/**.vue', {
  eager: true,
});

// console.log('vueFileMap', vueFileMap);

// export { MyComponent, BaseIntersectionObserver, BaseResizeObserver };

export {
  useAsyncRef,
  useEsc,
  useDPI,
  sleep,
  registerBaseJsonFormComponent,
  registerBaseButtonComponent,
};

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
