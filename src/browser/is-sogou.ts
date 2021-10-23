import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isSoGouBrowser = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isSoGouBrowser: ua should not be empty');
  }

  const haveSeUAMark = /se 2.x/i.test(ua);
  const haveMetasrMark = /metasr/i.test(ua);

  return haveSeUAMark || haveMetasrMark;
};

export default isSoGouBrowser;
