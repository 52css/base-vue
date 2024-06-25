# useDPI 获取dpi相关api

## 使用场景

### 通过dpi获取相关信息

```ts
const { getDPI, convertA4ToPixels, mmToPx } = useDPI();
const dpi = getDPI();
const a4Size = convertA4ToPixels(dpi);
const px = mmToPx(6 * 2, dpi)
```

<!-- ## Demo -->

<!-- <preview path="./use-esc-demo.vue" title="基本使用"></preview> -->
