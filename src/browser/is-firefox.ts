import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isFirefox = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isFirefox: ua should not be empty');
  }

  return /firefox/i.test(ua);
};

export default isFirefox;
