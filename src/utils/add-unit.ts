import { isNumber } from 'lodash-es';
export const addUnit = (value: string | number | undefined, unit = 'px') => {
  if (value === null || value === undefined) {
    value = 'auto';
  }

  return isNumber(+value) ? `${value}${unit}` : value;
};
