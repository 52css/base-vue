# class 转 function

## Code

```ts
// 将下面的代码转换为普通构造函数的写法
class Example {
  constructor(name) {
    this.name = name;
  }
  func() {
    console.log(this.name);
  }
}
```

## 解析

```ts
'use strict'; // 类只能在严格模式下调用

function Example(name) {
  if (!new.target) {
    // 非通过new构建, 报错
    throw new TypeError(
      `Class constructor Example cannot be invoked without 'new'`
    );
  }
  this.name = name;
}
// 类的方法不可枚举
Object.defineProperty(Example.prototype, 'func', {
  value: function () {
    if (new.target) {
      // 通过new构建, 报错
      throw new TypeError(
        `Example.prototype.func is not a constructor`
      );
    }
    console.log(this.name);
  },
  enumerable: false,
});
```
