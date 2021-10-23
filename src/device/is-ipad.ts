import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is iPad
export const isIPad = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIPad: ua should not be empty');
  }

  return /ipad/i.test(ua);
};

export default isIPad;
