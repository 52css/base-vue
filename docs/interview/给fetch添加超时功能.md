# 给 fetch 添加超时功能

## 解析

```ts
function createRequestWithTimeout(timeout = 3000) {
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const abort = new AbortController();
      options = options ?? {};
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          abort.abort();
        });
      }
      options.signal = abort.signal;
      setTimeout(() => {
        reject(new Error('Request timeout'));
        abort.abort();
      }, timeout);

      fetch(url, options).then(resolve, reject);
    });
  };
}

const request = createRequestWithTimeout(3000);
```
