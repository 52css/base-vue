import { ref, Ref, UnwrapRef, watch } from 'vue';

export type UseAsyncRefFn<TData, TParams> = (params: TParams) => Promise<TData>;

export type UseAsyncRefPagination = {
  pageSize: number;
  pageNum: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
};

export type UseAsyncRefOptions<TData> = {
  manual?: boolean;
  defaultValue?: TData;
  cacheKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refreshDeps?: any[];
};

const storage = {
  get(key: string, defaultValue: any) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return defaultValue;
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  has(key: string) {
    return localStorage.getItem(key) !== null;
  },
};

export type UseAsyncRefResponse<TData, TParams> = [
  Ref<UnwrapRef<TData> | undefined>,
  (params?: TParams) => void,
  Ref<boolean>,
  Ref<UseAsyncRefPagination>,
  Ref<Error>
] & {
  data: Ref<UnwrapRef<TData> | undefined>;
  run: (params?: TParams) => void;
  loading: Ref<boolean>;
  pagination: Ref<UseAsyncRefPagination>;
  err: Ref<Error>;
};

export const useAsyncRef = <
  TData,
  TParams extends {
    pageNum?: number;
    pageSize?: number;
    [key: string]: unknown;
  }
>(
  fn: UseAsyncRefFn<TData, TParams>,
  options?: UseAsyncRefOptions<TData>
): UseAsyncRefResponse<TData, TParams> => {
  const manual = options?.manual ?? false;
  const defaultValue = options?.cacheKey
    ? storage.get(options.cacheKey, options?.defaultValue)
    : options?.defaultValue;
  const data = ref<TData | undefined>(defaultValue);
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

  function isPaginatedResponse<T>(
    response: T | { total: number; data: T }
  ): response is { total: number; data: T } {
    return (response as { total: number; data: T }).total !== undefined;
  }

  const run = (params?: TParams) => {
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
      ...((params ?? {}) as TParams),
      pageNum,
      pageSize,
    })
      .then((res) => {
        if (isPaginatedResponse(res)) {
          const currentList = res.data ?? [];
          // 如果指定了页码或者第一页，返回当前页数据
          const isFirst = pageNum === 1;
          const list = isFirst
            ? currentList
            : //@ts-expect-error 不显示错误
              [...(data.value?.data as any[]), ...currentList];
          const isLast = (list as any[]).length >= res.total;

          pagination.value = {
            pageNum,
            pageSize,
            total: res.total,
            isFirst,
            isLast,
          };
          if (options?.cacheKey) {
            storage.set(options.cacheKey, {
              total: res.total,
              data: list,
            });
          }

          data.value = {
            total: res.total,
            data: list,
          } as TData;
        } else {
          if (options?.cacheKey) {
            storage.set(options.cacheKey, res);
          }
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

  if (!manual) {
    run();
  }

  // 增加依赖变更监听
  watch(
    () => options?.refreshDeps,
    () => {
      run();
    }
  );

  const rtv = [data, run, loading, pagination, err] as UseAsyncRefResponse<
    TData,
    TParams
  >;

  rtv.data = data;
  rtv.run = run;
  rtv.loading = loading;
  rtv.pagination = pagination;
  rtv.err = err;

  return rtv;
};
