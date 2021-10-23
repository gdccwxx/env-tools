import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isQQBrowser = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isQQBrowser: ua should not be empty');
  }

  return /qqbrowser/.test(ua.toLowerCase());
};

export default isQQBrowser;
