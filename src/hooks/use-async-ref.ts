import { ref, Ref, UnwrapRef } from 'vue';

export type UseAsyncRefFnParams = {
  pageNum: number;
  pageSize: number;
  [key: string]: any;
};
export type UseAsyncRefFn = (params: UseAsyncRefFnParams) => Promise<any>;
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
  Ref<Error>
] & {
  data: Ref<UnwrapRef<T> | undefined>;
  run: UseAsyncRefRun;
  loading: Ref<boolean>;
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
    pageSize: 20,
    total: 0,
    isLast: false,
  });

  const run = (params?: UseAsyncRefRunParams) => {
    if (loading.value || err.value || pagination.value.isLast) {
      return;
    }
    loading.value = true;
    fn({
      ...params,
      pageNum: params?.pageNum ?? pagination.value.pageNum,
      pageSize: params?.pageSize ?? pagination.value.pageSize,
    })
      .then((res) => {
        if (res.total) {
          const currentList = res.data ?? [];
          const currentPageNum = params?.pageNum ?? pagination.value.pageNum;
          // 如果指定了页码或者第一页，返回当前页数据
          const list =
            currentPageNum === 1 || params?.pageNum
              ? currentList
              : [...(data.value as any[]), ...currentList];
          const isLast = list.length >= res.total;

          pagination.value = {
            ...pagination.value,
            pageNum: currentPageNum + 1,
            isLast
          }
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

  const rtv = [data, run, loading, err] as UseAsyncRefResponse<T>;

  rtv.data = data;
  rtv.run = run;
  rtv.loading = loading;
  rtv.err = err;

  return rtv;
};
