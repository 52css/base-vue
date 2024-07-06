// path = './bar/**/*.js'
export const useFile = (path: string | string[]) => {
  if (typeof __VITE__ !== 'undefined') {
    // console.log('This is a Vite project');
    return import.meta.glob(path, {
      eager: true, // 导出模块内数据
      import: 'default', // 只导出默认
    });
  } else if (typeof __webpack_require__ !== 'undefined') {
    // console.log('This is a Webpack project');
    // TODO：去完善
    return require.context('./src/components', false, /\.js$/)
  }
};
