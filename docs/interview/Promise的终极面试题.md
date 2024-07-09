# Promise的终极面试题

## Code

```ts
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  });
```

## 解析

```ts
// then 返回的promise， 相当于放微队列执行 .then(() => Promise.resolve(4))
// 微队列[0, 1]
// 运行: 0 微队列[1, ]
// 运行: 1 微队列[p4.then(() => Promise.resolve(4)), 2]
// 微队列 [2, () => Promise.resolve(4)]
// 运行: 2 微队列[() => Promise.resolve(4), 3]
// 微队列 [3, 4]
// 运行：3 微队列 [4，5]
// 运行：4 微队列 [5]
// 运行: 5 微队列 [6]
// 运行：6
```