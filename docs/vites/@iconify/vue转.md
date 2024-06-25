# @iconify/vue

官网：<https://iconify.design/docs/icon-components/vue/>

iconify 是功能最丰富的图标框架。可以与任何图标库一起使用的统一图标框架。开箱即用的功能包括 80 多个图标集和超过 70,000 个图标。官方为了便于使用 iconify 网站上的图标，提供了@iconify/vue 组件，供大家使用 SVG framework，支持在线和离线 2 种方式使用。离线方式需要下载对应图标集合 json 数据，然后先从本地资源中加载，如果没有找到，通过 API 从线上下载资源，并进行浏览器缓存。

@iconify/vue 是一个功能非常强大的组件，支持图标名称动态渲染和静态渲染，正好弥补 vite-plugin-svg-icons 功能缺陷。

## 依赖安装

```sh
pnpm install @iconify/vue -D
```

## 使用例子

```tsx
import { Icon } from '@iconify/vue';
<Icon icon="mdi-light:home" />;
```

## 自定义组件

虽然@iconify/vue 也支持本地 svg,但逐个配置非常麻烦，所以结合 vite-plugin-svg-icons 和@iconify/vue,我们创建一个自定义组件，使其不仅支持本地静态动态 Svg 渲染，还支持显示静态动态 Svg 渲染。下面是自定义组件代码：

```vue
<template>
  <template v-if="localIcon">
    <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </template>
  <template v-else>
    <Icon v-if="icon" :icon="icon" v-bind="bindAttrs" />
  </template>
</template>

<script setup lang="ts" name="SvgIcon">
import { Icon } from '@iconify/vue';
// eslint-disable-next-line vue/no-setup-props-destructure
const { icon, localIcon } = defineProps<{
  /** iconify线上图标名称 */
  icon?: string;
  /** 本地svg的文件名称 */
  localIcon?: string;
}>();
// 获取组件传递的属性
const attrs = useAttrs();
// 计算绑定属性
const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) ?? 'w-24px h-24px',
  style: attrs.style as string,
}));
// 计算本地svg动态的symbolId
const symbolId = computed(() => {
  const icon = localIcon ?? 'no-icon';
  return `#icon-local-${icon}`;
});
</script>
```

此时，便可以灵活的渲染本地和线上 iconify 网站上的 Svg 图标，使用例子如下：

```html
本地Svg:<SvgIcon localIcon="logo"></SvgIcon> iconify线上Svg:<SvgIcon
  icon="healthicons:fhir-logo"
  class="w-24px h-24px"
></SvgIcon>
```
