# useAsyncRef

## 使用场景

### 初始化加载数据

```ts
// 没有参数
const ajax1 = () => new Promise((resolve) => setTimeout(resolve, 200))
const data1 = useAsyncRef(ajax1))

// 请求带参数
const ajax2 = (timer) => new Promise((resolve) => setTimeout(resolve, timer))
const data2 = useAsyncRef(() => ajax2(300)))
```

### 等到 xx 时机才触发

```ts
const ajax1 = () => new Promise((resolve) => setTimeout(resolve, 200));
const [data1, setData1] = useAsyncRef(ajax1, { autoFetch: false });
const onClick = () => {
  setData1();
};
```

## Demo

<preview path="./use-async-ref-demo.vue" title="基本使用"></preview>
