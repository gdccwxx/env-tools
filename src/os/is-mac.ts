import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is mac system
export const isMac = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isMac: ua should not be empty');
  }

  return /macintosh|mac os x|macintel/i.test(ua);
};

export default isMac;
