export const useDPI = () => {
  const getDPI = (): number => {
    const dpiElement = document.getElementById('dpi');
    if (dpiElement) {
      const dpi = dpiElement.offsetWidth;
      return dpi;
    }

    const dpi = document.createElement('div');
    dpi.id = 'dpi';
    dpi.style.width = '1in';
    dpi.style.height = '1in';
    dpi.style.position = 'absolute';
    dpi.style.left = '-100%';
    dpi.style.top = '-100%';
    document.body.appendChild(dpi);

    return getDPI();
  };

  const mmToPx = (mm: number, dpi = 96) => {
    const inches = mm / 25.4; // 将毫米转换为英寸
    const pixels = inches * dpi; // 将英寸转换为像素
    return pixels;
  };

  const inToPx = (inches: number, dpi = 96) => {
    const pixels = inches * dpi; // 将英寸转换为像素
    return pixels;
  };

  const convertA4ToPixels = (dpi = 96) => {
    const inchPerMm = 25.4;
    const a4WidthMm = 210;
    const a4HeightMm = 297;

    const a4WidthInch = a4WidthMm / inchPerMm;
    const a4HeightInch = a4HeightMm / inchPerMm;

    const widthInPixels = Math.round(a4WidthInch * dpi);
    const heightInPixels = Math.round(a4HeightInch * dpi);

    return { width: widthInPixels, height: heightInPixels };
  };

  return {
    getDPI,
    mmToPx,
    inToPx,
    convertA4ToPixels,
  };
};
