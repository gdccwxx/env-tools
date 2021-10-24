import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';
import { isChrome } from './is-chrome';

export const isSafari = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isSafari: ua should not be empty');
  }

  const safariMark = /safari/i.test(ua);
  
  // because qq, 360 ... browsers have safari mark
  // but they also have chrome mark
  // so a better way to find the real browser is include safari but exclude chrome
  return safariMark && !isChrome(ua);
};

export default isSafari;
