import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isIE = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIE: ua should not be empty');
  }

  return /Trident/.test(ua);
};

export default isIE;
