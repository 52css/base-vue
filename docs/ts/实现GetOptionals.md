# 实现 GetOptionals

## Code

```ts
interface ComplexObject {
  mandatory: string;
  option1?: number;
  option2?: boolean;
}

type GetOptional<T> =

let keys: GetOptional<ComplexObject> // {option1?: number, option2: boolean}
```

## 解析

```ts
// 得到所有字段
type GetOptional<T> = {
  [K in keyof T]?: T[K];
};
// 剔除必填
type GetOptional<T> = {
  [K in keyof T as 条件满足 ? never : K]?: T[K];
};
type GetOptional<T> = {
  [K in keyof T as T[K] extend Required<T>[K] ? never : K]?: T[K];
};
```
