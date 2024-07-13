# 使用infer封装通用类型工具

## 自己实现ReturnType

```ts
type Return<T> = T extends (...args: any[]) => infer R ? R : T;
type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];

let sumResult: Return<sum>; // number;
let concatResult: Return<concat>; // any[]
```

## 获取函数第一个参数类型

```ts
type FirstArg<T> = T extends (x: infer F, ...args: any[]) => any ? F : T;

type fa = FirstArg<(name: number, age: number) => void>; // number;
```

## 返回Promise返回类型

```ts
type PromiseType<T> = T extends Promise<infer R> ? R : T;

type pt = PromiseType<Promise<string>>;
```

## 返回Array类型

```ts
type ArrayType<T> = T extends (infer U)[] ? U : T;

type ItemType1 = ArrayType<[string, number]>; // string | number;
type ItemType2 = ArrayType<string[]> // string;
```