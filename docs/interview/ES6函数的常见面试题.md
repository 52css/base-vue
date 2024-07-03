# ES6函数的常见面试题

## Code

```ts
const obj = {
  name: 'Share',
  sayHi1: () => {
    console.log(this.name)
  },
  sayHi2() {
    (() => {
      console.log(this.name);
    })(); 
  }
}

obj.sayHi1();
obj.sayHi2();
```

## 解析

```ts
// 第一个箭头函数没有this，取父，就是window
// 第二个去谁调用sayHi2, 就是 obj， 返回 => `Share`
```