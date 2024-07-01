<script lang="ts">
import { ref, onMounted, nextTick } from 'vue';

// 参考资料： https://segmentfault.com/a/1190000041457245
export interface BaseContenteditableProps {
  modelValue?: string;
}
export const BaseContenteditableDefault = {};
export interface BaseContenteditableEmits {
  (event: 'event1'): void;
}
export function getNodeAndOffset(
  el: Node,
  start: number = 0,
  end: number = 0
): [Node, number, Node, number] {
  const txtList: Node[] = [];
  const map = function (children: NodeList) {
    Array.from(children).forEach((el) => {
      if (el.nodeName === '#text') {
        txtList.push(el);
      } else {
        map(el.childNodes);
      }
    });
  };
  map(el.childNodes);

  const clips = txtList.reduce((arr: [Node, number, number][], item, index) => {
    const end =
      item.textContent!.length + (arr[index - 1] ? arr[index - 1][2] : 0);
    arr.push([item, end - item.textContent!.length, end]);
    return arr;
  }, []);

  const startNode = clips.find((el) => start >= el[1] && start < el[2]);
  const endNode = clips.find((el) => end >= el[1] && end < el[2]);

  if (!startNode || !endNode) {
    throw new Error('Start or end node not found');
  }

  return [startNode[0], start - startNode[1], endNode[0], end - endNode[1]];
}

export function getRangeOffset(el: Node): [number, number] {
  const txtList: Node[] = [];
  const map = function (children: NodeList) {
    Array.from(children).forEach((el) => {
      if (el.nodeName === '#text') {
        txtList.push(el);
      } else {
        map(el.childNodes);
      }
    });
  };
  map(el.childNodes);

  const clips = txtList.reduce((arr: [Node, number, number][], item, index) => {
    const end =
      item.textContent!.length + (arr[index - 1] ? arr[index - 1][2] : 0);
    arr.push([item, end - item.textContent!.length, end]);
    return arr;
  }, []);

  const range = window.getSelection()!.getRangeAt(0);

  // console.log('range', range)
  // console.log('clips', clips)

  const startOffset =
    clips.find((el) => range.startContainer === el[0])![1] + range.startOffset;
  const endOffset =
    clips.find((el) => range.endContainer === el[0])![1] + range.endOffset;

  return [startOffset, endOffset];
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<BaseContenteditableProps>(),
  BaseContenteditableDefault
);
defineEmits<BaseContenteditableEmits>();
defineOptions({
  name: 'BaseContenteditable',
});
// const value = defineModel();
const baseContenteditableRef = ref();
const pos: { start?: number; end?: number } = {
  start: undefined,
  end: undefined,
};
let lastRange: any;
const onMouseup = () => {
  const offset = getRangeOffset(baseContenteditableRef.value);
  pos.start = offset[0];
  pos.end = offset[1];
  lastRange = window.getSelection()!.getRangeAt(0);
  // console.log('mouseup', lastRange)
};
// 光标到元素最后
const cursorToTargetEnd = (target: HTMLElement) => {
  const range = document.createRange()
  const selection = window.getSelection()
  range.setStartAfter(target)
  // range.setEndAfter(target);
  range.collapse(true)
  if (selection) {
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
const checkIsUneditable = (target: HTMLElement) => {
  return target && target.dataset && target.dataset.editable === 'false'
}
const onClick = (event: Event) => {
  const target = event.target as HTMLElement

  if (checkIsUneditable(target)) {
    cursorToTargetEnd(target)
  }
}
// const isFocus = ref(false);
// const onFocus = () => {
//   isFocus.value = true;
// };
// const onBlur = () => {
//   setTimeout(() => {
//     isFocus.value = false;
//   }, 100)
// };
defineExpose({
  setSelection(start: number, end: number) {
    const selection = document.getSelection();
    const range = document.createRange();
    const nodes = getNodeAndOffset(baseContenteditableRef.value, start, end);
    range.setStart(nodes[0], nodes[1]);
    range.setEnd(nodes[2], nodes[3]);
    selection?.removeAllRanges();
    selection?.addRange(range);
  },
  setRange(position: number) {
    this.setSelection(position, position);
  },
  revertSelection() {
    const selection = document.getSelection();
    const range = document.createRange();
    const nodes = getNodeAndOffset(
      baseContenteditableRef.value,
      pos.start,
      pos.end
    );
    range.setStart(nodes[0], nodes[1]);
    range.setEnd(nodes[2], nodes[3]);
    selection?.removeAllRanges();
    selection?.addRange(range);
  },
  insertNode(node: Node) {
    // console.log('isFocus.value', isFocus.value)
    if (lastRange) {
      // 获取光标的位置
      var selection = window.getSelection();
      var range = selection!.getRangeAt(0);

      // 插入新节点
      range.insertNode(node);

      // 将光标移动到新节点之后
      range.setStartAfter(node);
      range.setEndAfter(node);
      selection!.removeAllRanges();
      selection!.addRange(range);
    } else {
      baseContenteditableRef.value.append(node);
      baseContenteditableRef.value.focus();

      // 获取光标的位置
      var selection = window.getSelection();
      selection?.selectAllChildren(baseContenteditableRef.value)
      selection?.collapseToEnd();
    }
  },
  insertText(textNode: string) {
    const newNode = document.createTextNode(textNode);
    // lastRange.deleteContents();
    // lastRange.insertNode(newNode);
    this.insertNode(newNode);
  },
  insertMarkText(textNode: string) {
    const newNode = document.createElement('mark');
    newNode.textContent = textNode;
    this.insertNode(newNode);
    // console.log('lastRange', lastRange);
    // if (lastRange) {
    //   lastRange.deleteContents();
    //   lastRange.insertNode(newNode);
    //   lastRange.setStartAfter(newNode);
    //   // lastRange.setEndAfter(newNode);
    // } else {
    //   baseContenteditableRef.value.append(newNode);
    // }
    // baseContenteditableRef.value.focus();
  },
  setMark() {
    const mark = document.createElement('mark');
    if (lastRange) {
      mark.append(lastRange.extractContents());
      lastRange.insertNode(mark);
    }
  },
});

onMounted(() => {
  // 这里只能单向绑定
  baseContenteditableRef.value.innerHTML = props.modelValue;
});
</script>

<template>
  <div
    ref="baseContenteditableRef"
    class="base-contenteditable"
    contenteditable="true"
    @mouseup="onMouseup"
    @click="onClick($event)"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-contenteditable {
}
</style>
