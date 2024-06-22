<script lang="ts">
export interface BaseJsonFormItemProps {
  prop1?: string;
}
export const BaseJsonFormItemDefault = {};
export interface BaseJsonFormItemEmits {
  (event: 'event1'): void;
}
export interface BaseJsonFormItemSlots {
  top: void;
  bottom: void;
  left: void;
  right: void;
  prepend: void; // 灰色盒子前面
  append: void; // 灰色盒子后面
}
</script>
<script setup lang="ts">
withDefaults(defineProps<BaseJsonFormItemProps>(), BaseJsonFormItemDefault);
defineEmits<BaseJsonFormItemEmits>();
defineOptions({
  name: 'BaseJsonFormItem',
});
</script>

<template>
  <section class="base-json-form-item" flex flex-col gap-2 w-full>
    <slot name="top" />
    <div flex gap-2>
      <slot name="left" />
      <section
        class="base-json-form-item__container"
        flex
        flex-1
        min-w-0
        :class="{
          'base-json-form-item__container--wrapped':
            $slots.prepend || $slots.append,
        }"
      >
        <div
          v-if="$slots.prepend"
          class="base-json-form-item__container__prepend"
        >
          <slot name="prepend" />
        </div>
        <div class="base-json-form-item__container__content" flex-1 min-w-0>
          <slot />
        </div>
        <div
          v-if="$slots.append"
          class="base-json-form-item__container__append"
        >
          <slot name="append" />
        </div>
      </section>
      <slot name="right" />
    </div>
    <slot name="bottom" />
  </section>
</template>

<style scoped lang="scss">
.base-json-form-item {
  &__container {
    &__prepend {
      background-color: #f3f3f3;
      padding: 0 8px;
      border-radius: 3px 0 0 3px;
      border: 1px solid #dcdcdc;
    }
    &__append {
      background-color: #f3f3f3;
      padding: 0 8px;
      border-radius: 0 3px 3px 0;
      border: 1px solid #dcdcdc;
    }
    &__content {
    }
    &--wrapped {
      .base-json-form-item__container__content {
        border: solid #dcdcdc;
        border-width: 1px 0;
        padding: 0 8px;
      }
    }
  }
}
</style>
