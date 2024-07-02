import { ref } from 'vue';

export type UseAsyncRefFn = (...args: any) => Promise<any>;
export type UseAsyncRefOptions = {
  autoFetch?: boolean;
  defaultValue?: any;
};

export const useAsyncRef = <T>(fn: UseAsyncRefFn, options?: UseAsyncRefOptions): any => {
  const autoFetch = options?.autoFetch ?? true;
  const defaultValue = options?.defaultValue;
  const data = ref<T>(defaultValue);
  const loading = ref(false);
  const err = ref();
  // 增加状态

  // data.loading = loading;
  // data.err = err;

  const setData = (...args: any[]) => {
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
    setData();
    return data;
  }

  return [data, setData];
};
