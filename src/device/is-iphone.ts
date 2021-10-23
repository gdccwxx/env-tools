import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is iPhone
export const isIPhone = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIPhone: ua should not be empty');
  }

  return /iphone/i.test(ua);
};

export default isIPhone;
