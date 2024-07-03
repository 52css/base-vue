# 手写 Promise.all

## Code

```ts
Promise.myAll = function (promos) {
  // todo.
};
```

## 讲解

```ts
Promise.myAll = function (promos) {
  // 调用res, rej 方便调用直接返回成功或失败
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  let i = 0;
  const result = [];
  // 官方定义，promos 是可迭代对象，数组是length取长度，Set是size取长度，我们需要根据可迭代对象都可以 `for of` 累加得到长度
  for (const promo of promos) {
    i++;
    Promise.resolve(promo).then((data) => {
      // 1. 将完成的数据加入到完成的结果中
      result[i] = data;
      // 2. 判断是否都完毕，直接res
      i--;
      if (i === 0) {
        res(result);
      }
    }, rej);
  }
  // 没有长度，直接返回成功
  if (i === 0) {
    res([]);
  }

  return p;
};
```
