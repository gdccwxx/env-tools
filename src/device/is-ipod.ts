import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is ipod
export const isIPod = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIPod: ua should not be empty');
  }

  return /ipod/i.test(ua);
};

export default isIPod;
