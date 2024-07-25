import { ref, Ref, UnwrapRef } from 'vue';

export type UseAsyncRefFn = (...args: any) => Promise<any>;
export type UseAsyncRefOptions<T> = {
  autoFetch?: boolean;
  defaultValue?: T;
};
export type UseAsyncRefRun = (...args: any[]) => void;
export type UseAsyncRefResponse<T> = [
  Ref<UnwrapRef<T> | undefined>,
  UseAsyncRefRun,
  Ref<boolean>,
  Ref<Error>,
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

  const run = (...args: any[]) => {
    if (loading.value || err.value) {
      return;
    }
    loading.value = true;
    fn(...args)
      .then((res) => {
        data.value = res;
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
