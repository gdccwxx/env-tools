import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';
import { isIPad } from '../device/is-ipad';
import { isIPhone } from '../device/is-iphone';
import { isIPod } from '../device/is-ipod';
import { isIWatch } from '../device/is-iwatch';

// is ios system
export const isIOS = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIOS: ua should not be empty');
  }

  const iosMark = /ios/i.test(ua);

  return iosMark || isIPad(ua) || isIPhone(ua) || isIPod(ua) || isIWatch(ua);
};

export default isIOS;
