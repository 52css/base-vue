# call 和 apply 的链式调用

## Code

```ts
const r = console.log.call.call.call.call.call.call.call.apply(
  (a) => a,
  [1, 2]
);
```

## 解析

```ts
/**
 * console.log.call === Function.prototype.call
 * console.log.call.call === Function.prototype.call
 *  =>
 * const r = Function.prototype.call.apply((a) => a, [1, 2])
 *
 * => 函数.apply(x, [y, z]) === x.函数(y, z)
 *
 * => (a => a).call(1, 2) => 2
 */
```
