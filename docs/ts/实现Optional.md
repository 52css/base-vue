# 实现 Optional

## Code

```ts
interface Article {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

type CreateArticleOptions = Optional<Article, 'date' | 'readCount'>;
```

## 实现

```ts
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```
