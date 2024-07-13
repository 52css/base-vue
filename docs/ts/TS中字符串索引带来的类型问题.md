# TS中字符串索引带来的类型问题

## Code

```ts
const obj = {
  name: 'lison',
  age: 18,
}

function method(key: string) {
  const v = obj[key]
}
```

## 解析

```ts
const obj = {
  name: 'lison',
  age: 18,
}

function method(key: keyof typeof obj) {
  const v = obj[key]
}
```