# useAsyncRef 异步 Ref

## 使用场景

* 初始化加载数据
* 等待xx时机触发加载

## Demo

<preview path="./use-async-ref-demo.vue" title="基本使用"></preview>

## API

| 参数    | 说明     | 类型                                            | 默认值 | 版本 |
| ------- | -------- | ----------------------------------------------- | ------ | ---- |
| fn      | 传递参数 | `(params: UseAsyncRefFnParams) => Promise<any>` | \-     |      |
| options | 配置参数 | `UseAsyncRefOptions`                            | \-     |      |

### UseAsyncRefOptions

| 参数         | 说明     | 类型      | 默认值      | 版本 |
| ------------ | -------- | --------- | ----------- | ---- |
| autoFetch    | 自动请求 | `boolean` | `true`      |      |
| defaultValue | 默认值   | `any`     | `undefined` |      |

### 返回类型

```ts

export type UseAsyncRefFnParams = {
  pageNum: number;
  pageSize: number;
  [key: string]: any;
};
export type UseAsyncRefFn = (params: UseAsyncRefFnParams) => Promise<any>;

export type UseAsyncRefPagination = {
  pageSize: number;
  pageNum: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
};

export type UseAsyncRefOptions<T> = {
  autoFetch?: boolean;
  defaultValue?: T;
};
export type UseAsyncRefRunParams = {
  pageNum?: number;
  pageSize?: number;
  [key: string]: any;
};
export type UseAsyncRefRun = (params?: UseAsyncRefRunParams) => void;
export type UseAsyncRefResponse<T> = [
  Ref<UnwrapRef<T> | undefined>,
  UseAsyncRefRun,
  Ref<boolean>,
  Ref<UseAsyncRefPagination>,
  Ref<Error>
] & {
  data: Ref<UnwrapRef<T> | undefined>;
  run: UseAsyncRefRun;
  loading: Ref<boolean>;
  pagination: Ref<UseAsyncRefPagination>;
  err: Ref<Error>;
};
```
