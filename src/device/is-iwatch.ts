import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is iWatch
export const isIWatch = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIWatch: ua should not be empty');
  }

  return /iwatch/i.test(ua);
};

export default isIWatch;
