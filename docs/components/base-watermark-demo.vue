<script lang="ts">
export interface BaseWatermarkDemoProps {
  prop1?: string
}
export const BaseWatermarkDemoDefault = {}
export interface BaseWatermarkDemoEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseWatermarkDemoProps>(), BaseWatermarkDemoDefault)
defineEmits<BaseWatermarkDemoEmits>()
defineOptions({
  name: 'BaseWatermarkDemo',
})
</script>

<template>
  <base-watermark class="base-watermark-demo" h-300px text="Base Vue">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam suscipit id consequuntur explicabo veniam voluptatibus consequatur. Unde architecto, minima labore illo non eius voluptatem dolor quia magni nemo, dolores obcaecati at nostrum sed facilis? Iure esse enim tempore voluptatum quam repellendus, voluptate ab perferendis labore totam ipsa consequuntur deserunt fuga laudantium officia distinctio aperiam! Dolores facilis quia eligendi beatae cupiditate mollitia libero, consequatur alias expedita dolor doloribus aspernatur distinctio ea, debitis quod ipsam delectus nemo incidunt qui natus dicta. Ad labore eaque nostrum, repudiandae aliquam reiciendis quis, hic in aperiam, necessitatibus optio. At pariatur aperiam totam a minima sequi?
  </base-watermark>
</template>

<style scoped lang="scss">
.base-watermark-demo {
}
</style>
