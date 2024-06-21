import { App } from 'vue';

import MyComponent from './components/my-component.vue';
import BaseIntersectionObserver from './components/base-intersection-observer.vue';
import BaseResizeObserver from './components/base-resize-observer.vue';

export { MyComponent, BaseIntersectionObserver, BaseResizeObserver };

// 默认导出
export default {
  install(app: App) {
    app.component('MyComponent', MyComponent);
    app.component('BaseIntersectionObserver', BaseIntersectionObserver);
    app.component('BaseResizeObserver', BaseResizeObserver);
  },
};
