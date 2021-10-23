import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isOpera = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isOpera: ua should not be empty');
  }

  return /Opera/.test(ua);
};

export default isOpera;
