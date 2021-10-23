import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isQQBrowser = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isQQBrowser: ua should not be empty');
  }

  return /qqbrowser/i.test(ua);
};

export default isQQBrowser;
