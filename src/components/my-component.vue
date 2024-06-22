<template>
  <div class="my-component">
    <h1>Hello, Vite Component Library!</h1>
    <div class="text-25px bg-#ccc" c-hex-ff6700>你好Unocss</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyComponent',
});
</script>

<style scoped>
.my-component {
  color: blue;
}
</style>
