import { ref, Ref, UnwrapRef } from 'vue';

export type UseAsyncRefFnParams = {
  pageNum: number;
  pageSize: number;
  [key: string]: any;
};
export type UseAsyncRefFn = (params: UseAsyncRefFnParams) => Promise<any>;

export type UseAsyncRefPagination = {
  pageSize: number;
  pageNum: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
};

export type UseAsyncRefOptions<T> = {
  autoFetch?: boolean;
  defaultValue?: T;
};
export type UseAsyncRefRunParams = {
  pageNum?: number;
  pageSize?: number;
  [key: string]: any;
};
export type UseAsyncRefRun = (params?: UseAsyncRefRunParams) => void;
export type UseAsyncRefResponse<T> = [
  Ref<UnwrapRef<T> | undefined>,
  UseAsyncRefRun,
  Ref<boolean>,
  Ref<UseAsyncRefPagination>,
  Ref<Error>
] & {
  data: Ref<UnwrapRef<T> | undefined>;
  run: UseAsyncRefRun;
  loading: Ref<boolean>;
  pagination: Ref<UseAsyncRefPagination>;
  err: Ref<Error>;
};

export const useAsyncRef = <T>(
  fn: UseAsyncRefFn,
  options?: UseAsyncRefOptions<T>
): UseAsyncRefResponse<T> => {
  const autoFetch = options?.autoFetch ?? true;
  const defaultValue = options?.defaultValue;
  const data = ref<T | undefined>(defaultValue);
  const loading = ref(false);
  const err = ref();
  // 增加状态
  const pagination = ref({
    pageNum: 1,
    pageSize: 10,
    total: 0,
    isFirst: false,
    isLast: false,
  });

  const run = (params?: UseAsyncRefRunParams) => {
    const pageNum = params?.pageNum ?? pagination.value.pageNum;
    const pageSize = params?.pageSize ?? pagination.value.pageSize;
    if (
      pageNum !== 1 &&
      (loading.value || err.value || pagination.value.isLast)
    ) {
      return;
    }
    loading.value = true;
    fn({
      ...params,
      pageNum,
      pageSize,
    })
      .then((res) => {
        if (res.total) {
          const currentList = res.data ?? [];
          // 如果指定了页码或者第一页，返回当前页数据
          const list =
            pageNum === 1
              ? currentList
              : [...(data.value as any[]), ...currentList];
          const isFirst = pageNum === 1;
          const isLast = list.length >= res.total;

          pagination.value = {
            ...pagination.value,
            total: res.total,
            isFirst,
            isLast,
          };
          data.value = list;
        } else {
          data.value = res;
        }
      })
      .catch((e) => {
        err.value = e;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  if (autoFetch) {
    run();
  }

  const rtv = [data, run, loading, pagination, err] as UseAsyncRefResponse<T>;

  rtv.data = data;
  rtv.run = run;
  rtv.loading = loading;
  rtv.pagination = pagination;
  rtv.err = err;

  return rtv;
};
