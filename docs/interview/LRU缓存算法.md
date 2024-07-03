# LRU缓存算法

## Code

```ts
/**
 * 就是存储空间不足，把最久未使用的剔除
 */
```

## 实现

```ts
class LRUCache {
  #map;
  #length;
  constructor(len) {
    this.#map = new Map();
    this.#length = len;
  }
  has(key) {
    return this.#map.has(key)
  }
  get(key) {
    if (!this.has(key)) {
      return null;
    }
    const value = this.#map.get(key)
    this.#map.delete(key);
    this.#map.set(key, value);
    return value
  }
  set(key, val) {
    if (this.has(key)) {
      this.#map.delete(key);
    }
    this.#map.set(key, val);
    if (this.#map.size > this.#length) {
      this.#map.delete(this.#map.keys().next().value);
    }
  }
}
```