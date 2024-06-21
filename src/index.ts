import { App } from 'vue';

import MyComponent from './components/my-component.vue';
import BaseIntersection from './components/base-intersection-observer.vue';

export { MyComponent, BaseIntersection };

// 默认导出
export default {
  install(app: App) {
    app.component('MyComponent', MyComponent);
    app.component('BaseIntersection', BaseIntersection);
  },
};
