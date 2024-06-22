<script lang="ts">
export interface BaseStatusVariantProps {
  prop1?: string
}
export const BaseStatusVariantDefault = {}
export interface BaseStatusVariantEmits {
  (event: 'event1'): void
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseStatusVariantProps>(), BaseStatusVariantDefault)
defineEmits<BaseStatusVariantEmits>()
defineOptions({
  name: 'BaseStatusVariant',
})
</script>

<template>
  <section class="base-status-variant" flex flex-col gap-2>
    <section flex gap-2>
      <base-status theme="default" value="default" />
      <base-status theme="default" variant="fill" value="default" />
      <base-status theme="default" variant="outline" value="default" />
      <base-status theme="default" variant="dashed" value="default" />
      <base-status theme="default" variant="text" value="default" />
    </section>
    <section flex gap-2>
      <base-status theme="primary" value="primary" />
      <base-status theme="primary" variant="fill" value="primary" />
      <base-status theme="primary" variant="outline" value="primary" />
      <base-status theme="primary" variant="dashed" value="primary" />
      <base-status theme="primary" variant="text" value="primary" />
    </section>
    <section flex gap-2>
      <base-status theme="danger" value="danger" />
      <base-status theme="danger" variant="fill" value="danger" />
      <base-status theme="danger" variant="outline" value="danger" />
      <base-status theme="danger" variant="dashed" value="danger" />
      <base-status theme="danger" variant="text" value="danger" />
    </section>
    <section flex gap-2>
      <base-status theme="warning" value="warning" />
      <base-status theme="warning" variant="fill" value="warning" />
      <base-status theme="warning" variant="outline" value="warning" />
      <base-status theme="warning" variant="dashed" value="warning" />
      <base-status theme="warning" variant="text" value="warning" />
    </section>
    <section flex gap-2>
      <base-status theme="success" value="success" />
      <base-status theme="success" variant="fill" value="success" />
      <base-status theme="success" variant="outline" value="success" />
      <base-status theme="success" variant="dashed" value="success" />
      <base-status theme="success" variant="text" value="success" />
    </section>
  </section>
</template>

<style scoped lang="scss">
.base-status-variant {
}
</style>
