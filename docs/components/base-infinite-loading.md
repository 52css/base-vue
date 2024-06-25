# BaseInfiniteLoading 无限滚动

## 使用场景

### 在容器中无限滚动

- 手机端常见请求是 lastId 作为 key，请求后 10 条，整体下拉刷新（todo、待完善）
- pc 端常见代替分页请求

## Demo

<preview path="./base-infinite-loading-demo.vue" title="基本使用"></preview>

## API

| 参数     | 说明 | 类型                                                                                          | 默认值 | 版本 |
| -------- | ---- | --------------------------------------------------------------------------------------------- | ------ | ---- |
| loadMore | 加载更多数据 | `(pagination: {pageNum: number, pageSize: number}) => Promise<{total?: number, rows: any[]}>` | \-     |      |
