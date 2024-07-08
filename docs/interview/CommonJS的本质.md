# CommonJS的本质

## Code

```ts
this.a = 1;
exports.b = 2;
exports = {
  c: 3
};
module.exports = {
  d: 4
};
exports.e = 5;
this.f = 6;
```

## 解析

```ts
function require(modulePath) {
  // 1. 根据传递的模块路径，得到模块完整的绝对路径
  var moduleId = getModuleId(modulePath);
  // 2. 判断缓存
  if (cache[moduleId]) {
    return cache[moduleId];
  }
  // 3. 真正运行模块代码的辅助函数
  function _require(exports, require, module, __filename, __dirname) {
    // 目标模块的代码在这里
  }
  // 4. 准备并运行辅助函数
  var module = {
    exports: {},
  }
  var exports = module.exports;
  // 得到模块文件的绝对路径
  var __filename = moduleId;
  // 得到模块所在目录的绝对路径
  var __dirname = getDirname(__filename);
  _require.call(exports, exports, require, module, __filename, __dirname);
  // 5. 缓存 module.exports;
  cache[moduleId] = module.exports;
  // 6. 返回 module.exports;
  return module.exports;
}
```

## 分析

```ts
this.a = 1; // this = exports = module.exports = { a: 1 }
exports.b = 2; // this = exports = module.exports = { a: 1, b: 2 }
exports = { // exports = { c: 3 } this = module.exports = {a: 1, b: 2}
  c: 3
};
module.exports = { // exports = { c: 3 } module.exports = {d: 4} this = {a: 1, b: 2}
  d: 4
};
exports.e = 5; // exports = {c: 3, e: 5} module.exports = {d: 4} this = {a: 1, b: 2}
this.f = 6; //  exports = {c: 3, e: 5} module.exports = {d: 4} this = {a: 1, b: 2, f: 6}
```