<script lang="ts">
export interface BaseImageDemoProps {
  prop1?: string;
}
export const BaseImageDemoDefault = {};
export interface BaseImageDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseImageDemoProps>(), BaseImageDemoDefault);
defineEmits<BaseImageDemoEmits>();
defineOptions({
  name: 'BaseImageDemo',
});
</script>

<template>
  <base-image width="100" height="100" />
  <div
    class="base-intersection-demo"
    style="
      border: 2px dashed #ccc;
      height: 200px;
      margin: 2rem 1rem;
      overflow: auto;
    "
  >
    <div style="height: 500px"></div>
    <base-image
      width="100"
      height="100"
      src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
    >
    </base-image>
    <div style="height: 500px"></div>
  </div>
</template>

<style scoped lang="scss">
.base-image-demo {
}
</style>
