import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isEdge = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isEdge: ua should not be empty');
  }

  return /Edge/.test(ua);
};

export default isEdge;
