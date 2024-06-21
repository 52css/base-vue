<script lang="ts">
import { ref } from 'vue';
export interface BaseIntersectionDemoProps {
  prop1?: string;
}
export const BaseIntersectionDemoDefault = {};
export interface BaseIntersectionDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseIntersectionDemoProps>(),
  BaseIntersectionDemoDefault
);
defineEmits<BaseIntersectionDemoEmits>();
defineOptions({
  name: 'BaseIntersectionDemo',
});
const disabled = ref(false);
const show = ref(false);
</script>

<template>
  <header>
    <label>
      disabled:
      <input type="checkbox" v-model="disabled" />
    </label>
  </header>
  <header>
    Element
    <template v-if="show">
      <span> inside </span>
    </template>
    <template v-else>
      <span> outside </span>
    </template>

    the viewport
  </header>

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
    <base-intersection-observer
      :disabled="disabled"
      @enter="show = true"
      @leave="show = false"
      style="border: 2px dashed green; margin: 10px; padding: 10px"
    >
      Hello world
    </base-intersection-observer>
    <div style="height: 500px"></div>
  </div>
</template>

<style scoped lang="scss">
.base-intersection-demo {
}
</style>
