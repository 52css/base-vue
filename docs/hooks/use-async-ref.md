# useAsyncRef 异步 Ref

## 使用场景

- 初始化加载数据
- 等待 xx 时机触发加载

## Demo

<preview path="./use-async-ref-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明     | 类型                                  | 默认值 | 版本 |
| ------- | -------- | ------------------------------------- | ------ | ---- |
| fn      | 传递参数 | `(params: TParams) => Promise<TData>` | \-     |      |
| options | 配置参数 | `UseAsyncRefOptions`                  | \-     |      |

### UseAsyncRefOptions

| 参数         | 说明     | 类型      | 默认值      | 版本 |
| ------------ | -------- | --------- | ----------- | ---- |
| manual       | 手动请求 | `boolean` | `false`     |      |
| defaultValue | 默认值   | `T`       | `undefined` |      |

### 返回类型

```ts
export type UseAsyncRefFn<TData, TParams> = (params: TParams) => Promise<TData>;

export type UseAsyncRefPagination = {
  pageSize: number;
  pageNum: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
};

export type UseAsyncRefOptions<TData> = {
  manual?: boolean;
  defaultValue?: TData;
};

export type UseAsyncRefResponse<TData, TParams> = [
  Ref<UnwrapRef<TData> | undefined>,
  (params?: TParams) => void,
  Ref<boolean>,
  Ref<UseAsyncRefPagination>,
  Ref<Error>
] & {
  data: Ref<UnwrapRef<TData> | undefined>;
  run: (params?: TParams) => void;
  loading: Ref<boolean>;
  pagination: Ref<UseAsyncRefPagination>;
  err: Ref<Error>;
};
```
