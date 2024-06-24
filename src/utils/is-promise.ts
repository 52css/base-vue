export const isPromise = (obj: any) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const AsyncFunction = (async () => {}).constructor;
  return obj instanceof Promise || obj instanceof AsyncFunction === true;
};
