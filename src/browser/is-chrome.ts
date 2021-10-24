import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isChrome = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isChrome: ua should not be empty');
  }

  return /chrome/i.test(ua);
};

export default isChrome;
