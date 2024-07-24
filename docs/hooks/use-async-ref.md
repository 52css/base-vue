# useAsyncRef 异步 Ref

## 使用场景

### 初始化加载数据

```ts
// 没有参数
const ajax1 = () => new Promise((resolve) => setTimeout(resolve, 200))
const [data1] = useAsyncRef(ajax1))

// 请求带参数
const ajax2 = (timer) => new Promise((resolve) => setTimeout(resolve, timer))
const [data2] = useAsyncRef(() => ajax2(300)))
```

### 等到 xx 时机才触发

```ts
const ajax1 = () => new Promise((resolve) => setTimeout(resolve, 200));
const [data1, setData1] = useAsyncRef(ajax1, { autoFetch: false });
const onClick = () => {
  setData1();
};
```

### 等到 xx 时机才触发, 需要传递参数

```ts
const fetchUserById = (id) =>
  new Promise((resolve) => setTimeout(() => resolve(id), 200));
const [user, setUser] = useAsyncRef(fetchUserById, { autoFetch: false });
const onClick = () => {
  setUser(123);
};
```

## Demo

<preview path="./use-async-ref-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明     | 类型                             | 默认值 | 版本 |
| ------- | -------- | -------------------------------- | ------ | ---- |
| fn      | 传递参数 | `(...args: any) => Promise<any>` | \-     |      |
| options | 配置参数 | `UseAsyncRefOptions`             | \-     |      |

### UseAsyncRefOptions

| 参数         | 说明                                                                        | 类型      | 默认值      | 版本 |
| ------------ | --------------------------------------------------------------------------- | --------- | ----------- | ---- |
| autoFetch    | 自动请求, 为`true`返回响应式数据，为`false`返回[`reactiveData`, `cb`]       | `boolean` | `true`      |      |
| defaultValue | 默认值                                                                      | `any`     | `undefined` |      |
| setResponse  | `<R>(response: R, request: Record<string, any>, noMore: Ref<boolean>) => R` | `any`     | `x => x`    |      |

### 返回类型

```ts
export type UseAsyncRefRun = (...args: any[]) => void;
export type UseAsyncRefResponse<T> = [
  Ref<UnwrapRef<T> | undefined>,
  UseAsyncRefRun,
  Ref<boolean>,
  Ref<Error>,
  Ref<boolean>
] & {
  data: Ref<UnwrapRef<T> | undefined>;
  run: UseAsyncRefRun;
  loading: Ref<boolean>;
  err: Ref<Error>;
  noMore: Ref<boolean>;
};
```
