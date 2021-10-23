import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is android system
export const isAndroid = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isAndroid: ua should not be empty');
  }

  return /android|adr/i.test(ua);
};

export default isAndroid;
