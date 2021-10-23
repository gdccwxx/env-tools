import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is ios system
export const isIOS = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIOS: ua should not be empty');
  }

  return /ios|iphone|ipad|ipod|iwatch/i.test(ua);
};

export default isIOS;
