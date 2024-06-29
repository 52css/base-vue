<script lang="ts">
export interface BaseContextmenuDemoProps {
  prop1?: string;
}
export const BaseContextmenuDemoDefault = {};
export interface BaseContextmenuDemoEmits {
  (event: 'event1'): void;
}
</script>
<script setup lang="ts">
withDefaults(
  defineProps<BaseContextmenuDemoProps>(),
  BaseContextmenuDemoDefault
);
defineEmits<BaseContextmenuDemoEmits>();
defineOptions({
  name: 'BaseContextmenuDemo',
});
</script>

<template>
  <base-contextmenu
    :menu="[{ label: 'menu1' }, { label: 'menu2' }, { label: 'menu3' }]"
  >
    <div style="height: 500px; background: pink" />
  </base-contextmenu>

  <base-contextmenu
    :menu="[{ label: 'menu4' }, { label: 'menu5' }, { label: 'menu6' }]"
  >
    <div style="height: 500px; background: green">
      <base-contextmenu
        :menu="[{ label: 'menu7' }, { label: 'menu8' }, { label: 'menu9' }]"
      >
        <div
          style="
            height: 100px;
            margin: 20px;
            background: yellow;
            border-radius: 20px;
          "
        />
      </base-contextmenu>
    </div>
  </base-contextmenu>
</template>

<style scoped lang="scss">
.base-contextmenu-demo {
}
</style>
