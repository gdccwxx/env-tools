import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isUCBrowser = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isUCBrowser: ua should not be empty');
  }

  return /ubrowser/.test(ua);
};

export default isUCBrowser;
