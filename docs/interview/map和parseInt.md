# map和parseInt

## Code

```ts
const r = ['1', '2', '3'].map(parseInt);
```

## 解析

```ts
/**
 * parseInt(number, 进制)
 * 进制
 * 1. 不传递、undefined、null、0， 是自动
 *  0x => 16进制
 *  0 开头 => 10进制 ，老版本是8进制/10进制
 *  10 进制
 * 2. 2-32 有效，无效时NAN
 * 所以 => [1, NAN, NAN]
 */
```