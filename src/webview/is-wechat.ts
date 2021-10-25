import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

/**
 * is wechat webview
 * @param ua `navigator.userAgent`
 * @returns is wechat env
 */
export const isWechat = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWechat: ua should not be empty');
  }

  return /micromessenger/i.test(ua);
};

export default isWechat;
