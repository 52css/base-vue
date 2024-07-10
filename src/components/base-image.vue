<script lang="ts">
import { ref, computed } from 'vue';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export interface BaseImageProps {
  src?: string;
  width?: string;
  height?: string;
}
export const BaseImageDefault = {};
export interface BaseImageEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BaseImageProps>(), BaseImageDefault);
defineEmits<BaseImageEmits>();
defineOptions({
  name: 'BaseImage',
});
const isEnter = ref(false)
const getSrc = computed(() => {
  // return props.src
  const svg = `<svg height="${props.height}" width="${props.width}" xmlns="http://www.w3.org/2000/svg">
    <foreignObject height="100%" width="100%" x="0" y="0">
      <body xmlns="http://www.w3.org/1999/xhtml" style="margin: 0; padding: 0; display: flex; height: 100%; background: #eee;">
        <p style="margin: auto;">${props.width}x${props.height}</p>
      </body>
    </foreignObject>
  </svg>`;
  const placeholderSrc =
    'data:image/svg+xml;charset=utf-8,' +
    svg
      .replace(/\n/g, '')
      .replace(/\t/g, '')
      .replace(/#/g, '%23')
      // 修复图片子结束标签不对
      .replace(/<img([^>]+?)>/g, (_$0: string, $1: string) => {
        return `<img` + $1 + '/>';
      })
      // 删除注释节点
      .replace(/<!--[\s\S]*?-->/g, '');
  return isEnter.value && props.src ? props.src  : placeholderSrc;
});
// const disabled = toRef(props, 'disabled')
const baseIntersectionObserverRef = useIntersectionObserver({
  enter(entry) {
    isEnter.value = true;
  },
});
</script>

<template>
  <img
    ref="baseIntersectionObserverRef"
    :src="getSrc"
    :width="width"
    :height="height"
    v-bind="$attrs"
  />
</template>

<style scoped lang="scss">
.base-image {
}
</style>
