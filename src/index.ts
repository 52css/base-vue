import { App, Component } from 'vue';
import { useAsyncRef } from './hooks/use-async-ref';
import { useComputedRef } from './hooks/use-computed-ref';
import { useDebounceRef } from './hooks/use-debounce-ref';
import { useEsc } from './hooks/use-esc';
import { useDPI } from './hooks/use-dpi';
import { sleep } from './utils/sleep';
import { registerBaseSearchComponent } from './components/base-search.vue';
import { registerBaseButtonComponent } from './components/base-button.vue';
import { registerBaseLabelComponent } from './components/base-label.vue';
import { registerBaseJsonFormComponent } from './components/base-json-form.vue';
import { registerBaseJsonTreeComponent } from './components/base-json-tree.vue';
import { registerBaseJsonDialogComponent } from './components/base-json-dialog.vue';
import { registerBaseJsonDrawerComponent } from './components/base-json-drawer.vue';

const componentFileMap = import.meta.glob('./components/**/**.vue', {
  eager: true,
});

// console.log('vueFileMap', vueFileMap);

// export { MyComponent, BaseIntersectionObserver, BaseResizeObserver };

export {
  useAsyncRef,
  useComputedRef,
  useDebounceRef,
  useEsc,
  useDPI,
  sleep,
  registerBaseSearchComponent,
  registerBaseButtonComponent,
  registerBaseLabelComponent,
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
