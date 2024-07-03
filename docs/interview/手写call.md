# 手写 call

## 解析

```ts
Function.prototype.myCall = function (ctx, ...args) {
  // 获取this指向
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx);
  const fn = this;
  const key = Symbol();
  Object.defineProperty(ctx, key, {
    value: fn,
    enumerable: false,
  });

  const rtv = ctx[key](...args);
  delete ctx[key];
  return rtv;
};
```
