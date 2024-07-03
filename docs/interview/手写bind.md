# 手写 bind

## 解析

```ts
Function.prototype.myBind = (ctx, ...args) => {
  // 获取this指向
  const fn = this;
  return function(...restArgs) {
    if (new.target) {
      return new fn(...args, ...restArgs)
    }
    return fn.apply(ctx, [...args, ...restArgs])
  }

}
```