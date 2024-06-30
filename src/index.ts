import { App, Component } from 'vue';
import { useAsyncRef } from './hooks/use-async-ref';
import { useEsc } from './hooks/use-esc';
import { useDPI } from './hooks/use-dpi';
import { sleep } from './utils/sleep';
import { registerBaseSearchComponent } from './components/base-search.vue';
import { registerBaseButtonComponent } from './components/base-button.vue';
import { registerBaseJsonFormComponent } from './components/base-json-form.vue';
import { registerBaseJsonTreeComponent } from './components/base-json-tree.vue';
import { registerBaseJsonDialogComponent } from './components/base-json-dialog.vue';
import { registerBaseJsonDrawerComponent } from './components/base-json-drawer.vue';
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
  registerBaseSearchComponent,
  registerBaseButtonComponent,
  registerBaseJsonFormComponent,
  registerBaseJsonTreeComponent,
  registerBaseJsonDialogComponent,
  registerBaseJsonDrawerComponent,
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
