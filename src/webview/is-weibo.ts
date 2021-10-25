import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

/**
 * is weibo webview
 * @param ua `navigator.userAgent`
 * @returns isWeiBo env
 */
export const isWeiBo = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWeiBo: ua should not be empty');
  }

  return /weibo/i.test(ua);
};

export default isWeiBo;
