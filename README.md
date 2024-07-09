# BaseVue

记录 vue 工作中的我不知道的点点滴滴，每天分享一点, 如果大家遇到任何问题，直接微信添加 steven_kerr

## 安装

```sh
pnpm add @52css/base-vue
```

## main.ts

```ts
import BaseVue from '@52css/base-vue';

app.use(BaseVue);
```

## 文档说明

[文档](https://52css.github.io/base-vue/)


## TODO

[ ] inputs的key支持 `@key`, 提交忽略当前key，用户提交数组表单
[ ] table 支持不同类型的 `type`
[ ] 增加`BaseTable`组件，为`Editable` 做准备