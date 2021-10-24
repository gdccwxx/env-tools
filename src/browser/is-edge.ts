import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isEdge = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isEdge: ua should not be empty');
  }

  return /edge/i.test(ua);
};

export default isEdge;
