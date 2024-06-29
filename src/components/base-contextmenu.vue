<script lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

export type BaseContextmenuMenuItem = {
  label?: string;
};
export interface BaseContextmenuProps {
  menu?: BaseContextmenuMenuItem[];
}
export const BaseContextmenuDefault = {
  menu: () => [],
};
export interface BaseContextmenuEmits {
  (event: 'select', item: BaseContextmenuMenuItem): void;
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseContextmenuProps>(), BaseContextmenuDefault);
const emit = defineEmits<BaseContextmenuEmits>();
defineOptions({
  name: 'BaseContextmenu',
});
const baseContextmenuRef = ref();
const x = ref(0);
const y = ref(0);
const showMenu = ref(false);
const openMenu = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  showMenu.value = true;
  x.value = e.clientX;
  y.value = e.clientY;
};
const closeMenu = () => {
  showMenu.value = false;
};
const onClick = (item: BaseContextmenuMenuItem) => {
  showMenu.value = false;
  emit('select', item);
};
const onBeforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0';
};
const onEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';
  const h = el.clientHeight;
  (el as HTMLElement).style.height = '0';
  requestAnimationFrame(() => {
    (el as HTMLElement).style.height = h + 'px';
    (el as HTMLElement).style.transition = '.5s';
  });
};
const onAfterEnter = (el: Element) => {
  (el as HTMLElement).style.transition = 'none';
};

onMounted(() => {
  baseContextmenuRef.value.addEventListener('contextmenu', openMenu);
  window.addEventListener('click', closeMenu, true);
  window.addEventListener('contextmenu', closeMenu, true);
});

onUnmounted(() => {
  baseContextmenuRef.value.removeEventListener('contextmenu', openMenu);
  window.removeEventListener('click', closeMenu, true);
  window.removeEventListener('contextmenu', closeMenu, true);
});
</script>

<template>
  <div ref="baseContextmenuRef" class="base-contextmenu">
    <slot />
    <teleport to="body">
      <transition
        @after-enter="onAfterEnter"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
      >
        <div
          v-if="showMenu"
          :style="{ left: x + 'px', top: y + 'px' }"
          class="contextmenu"
        >
          <div class="menu-list">
            <div
              v-for="(m, mIndex) in menu"
              :key="mIndex"
              class="menu-item"
              @click="onClick(m)"
            >
              {{ m.label }}
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss">
.contextmenu {
  position: fixed;

  .menu-list {
  }

  .menu-item {
    padding: 0.3rem 1rem;
    background-color: #fff;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
