# useEsc 按键Esc

## 使用场景

### 弹窗需要使用esc取消

```ts
// 等待页面完成，自动销毁绑定事件
useEsc(() => {
  console.log('esc')
})

// 手动销毁, 调用escOff()取消绑定
const escOff = useEsc(() => {
  console.log('esc')
})
```

## Demo

<preview path="./use-esc-demo.vue" title="基本使用"></preview>
