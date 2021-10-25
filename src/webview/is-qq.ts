import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

/**
 * is qq webview
 * @param ua `navigator.userAgent`
 * @returns is qq webview
 */
export const isQQ = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isQQ: ua should not be empty');
  }

  return /QQ\/[0-9]/i.test(ua);
};

export default isQQ;
