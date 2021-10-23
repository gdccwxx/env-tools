import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is linux system
export const isLinux = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isLinux: ua should not be empty');
  }

  return /x11/i.test(ua);
};

export default isLinux;
