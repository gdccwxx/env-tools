import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isOpera = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isOpera: ua should not be empty');
  }

  return /opera/i.test(ua);
};

export default isOpera;
