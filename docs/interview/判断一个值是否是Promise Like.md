# 判断一个值是否是Promise Like

## Code

```ts
/**
 * 判断一个值是否是 Promise Like
 */
function isPromiseLike(value) {

}
```

## 解析

```ts
/**
 * 判断一个值是否是 Promise Like
 */
function isPromiseLike(value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function') && (typeof value.then === 'function')
}
```